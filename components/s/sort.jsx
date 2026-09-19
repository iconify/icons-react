import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isej-pbln.css';

const viewBox = {"width":1024,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isej-pbln"/>`,
		"fallback": "fa:sort",
	});
}

export default Component;
