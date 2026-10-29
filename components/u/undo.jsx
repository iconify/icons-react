import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4i216vqg.css';
import '../../css/q/qbudnmeof.css';
import '../../css/w/w8s7q_bdd.css';
import '../../css/l/lgcq3zzjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4i216vqg wm-k"/><path class="qbudnmeof wm-k"/><path class="w8s7q_bdd wm-k"/><path class="lgcq3zzjm wm-shine"/></g>`,
		"fallback": "withicons-anime:undo",
	});
}

export default Component;
