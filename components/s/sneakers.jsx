import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fu60b0tdl.css';
import '../../css/k/kqsxv9b-j.css';
import '../../css/m/mkyvb_baj.css';
import '../../css/m/mo-1u7buy.css';
import '../../css/q/qyrmtrb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fu60b0tdl"/><path class="kqsxv9b-j"/><path class="mkyvb_baj"/><path class="mo-1u7buy"/><path class="qyrmtrb1k"/></g>`,
		"fallback": "streamline-cyber-color:sneakers",
	});
}

export default Component;
