import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/q9v-aht6v.css';
import '../../css/o/or6sjwbuq.css';
import '../../css/b/be6w7m0lq.css';
import '../../css/i/i0zcnebnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGsl799cDN" x1="1.52" x2="21.49" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGsl799cDN)" class="q9v-aht6v wm-k"/><path class="or6sjwbuq wm-a"/><path class="be6w7m0lq wm-shine"/><path class="i0zcnebnq wm-shine"/></g>`,
		"fallback": "withicons-lunar:shopping-cart-plus",
	});
}

export default Component;
