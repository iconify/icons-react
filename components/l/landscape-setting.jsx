import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4c_brc9k.css';
import '../../css/l/l73o31bzl.css';
import '../../css/p/pigpesbeu.css';
import '../../css/q/qxn93vxmw.css';
import '../../css/h/hc6o8pshf.css';
import '../../css/h/hcdrh4bpk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4c_brc9k"/><path class="l73o31bzl"/><path class="pigpesbeu"/><path class="qxn93vxmw"/><path class="hc6o8pshf"/><path class="hcdrh4bpk"/></g>`,
		"fallback": "streamline-color:landscape-setting",
	});
}

export default Component;
