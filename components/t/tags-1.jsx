import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5dfl-bzl.css';
import '../../css/w/wlx6tubki.css';
import '../../css/a/am1dg3b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5dfl-bzl"/><path class="wlx6tubki"/><path class="am1dg3b0y"/></g>`,
		"fallback": "streamline-ultimate-color:tags-1",
	});
}

export default Component;
