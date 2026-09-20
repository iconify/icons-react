import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxl-ikbvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxl-ikbvb"/>`,
		"fallback": "ix:list-text",
	});
}

export default Component;
