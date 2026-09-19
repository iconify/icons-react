import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of0wud94y.css';

const viewBox = {"width":1728,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of0wud94y"/>`,
		"fallback": "fa:ticket",
	});
}

export default Component;
