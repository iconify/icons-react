import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh3yrdbdd.css';
import '../../css/f/f81k0ubbs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xh3yrdbdd"/><path class="f81k0ubbs"/></g>`,
		"fallback": "streamline-color:play-list-4-flat",
	});
}

export default Component;
