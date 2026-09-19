import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufcn6d53a.css';
import '../../css/q/qwo9bsv-j.css';
import '../../css/h/h_q-a2bwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ufcn6d53a"/><path class="qwo9bsv-j"/><path class="h_q-a2bwc"/></g>`,
		"fallback": "fluent-emoji-flat:shrimp",
	});
}

export default Component;
