import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaya-abnl.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaya-abnl"/>`,
		"fallback": "fa:list-alt",
	});
}

export default Component;
