import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/h/hi4l66bem.css';
import '../../css/z/zjkrdna1t.css';
import '../../css/y/ysu27pbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMYR1XrtL" x1="3.01" x2="19.49" y1="1.5" y2="21.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGMYR1XrtL)" class="hi4l66bem wm-k"/><path class="wm-shine zjkrdna1t"/><path class="wm-shine ysu27pbbl"/></g>`,
		"fallback": "withicons-lunar:person-running",
	});
}

export default Component;
