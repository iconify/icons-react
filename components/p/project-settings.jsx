import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh19p7bko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zh19p7bko"/>`,
		"fallback": "ix:project-settings",
	});
}

export default Component;
