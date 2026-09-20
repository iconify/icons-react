import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo0ah0brb.css';
import '../../css/c/cx69zbcgz.css';
import '../../css/h/hqkh_2bgs.css';
import '../../css/q/qr9uqjbdp.css';
import '../../css/e/e4xhl5okr.css';

const viewBox = {"width":41,"height":41,"left":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qo0ah0brb"/><path class="cx69zbcgz"/><path class="hqkh_2bgs"/><path class="qr9uqjbdp"/><path class="e4xhl5okr"/></g>`,
		"fallback": "streamline-stickies-color:lab-tools",
	});
}

export default Component;
