import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/q1ajh7yqm.css';
import '../../css/d/ddzb3im_k.css';
import '../../css/x/xsegwpb6a.css';
import '../../css/i/imsg7m4dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxFoiQORg" x1="2.51" x2="21.49" y1="2.51" y2="21.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGxFoiQORg)" class="q1ajh7yqm wm-k"/><path class="ddzb3im_k wm-a"/><path class="wm-shine xsegwpb6a"/><path class="imsg7m4dx wm-shine"/></g>`,
		"fallback": "withicons-lunar:sun-dim",
	});
}

export default Component;
