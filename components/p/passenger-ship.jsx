import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkhnj3bkj.css';
import '../../css/n/nzjwj9bfr.css';
import '../../css/v/vgjnj4bmc.css';
import '../../css/w/wpa7_qb6h.css';
import '../../css/k/ke6l87bqb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zkhnj3bkj"/><path class="nzjwj9bfr"/><path class="vgjnj4bmc"/><path class="wpa7_qb6h"/><path class="ke6l87bqb"/></g>`,
		"fallback": "fluent-emoji-flat:passenger-ship",
	});
}

export default Component;
