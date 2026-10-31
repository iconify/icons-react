import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/g/gtp88ab6g.css';
import '../../css/h/h9e1enbza.css';
import '../../css/j/ja16gkbxc.css';
import '../../css/l/lopy7pbel.css';
import '../../css/x/xvrw0ebnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8pqVid4T" x1="0" x2="0" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGqyJ4BFZX" x1="1.5" x2="22.49" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG8pqVid4T)" stroke="url(#SVGqyJ4BFZX)" class="gtp88ab6g wm-k"/><path class="h9e1enbza wm-shine"/><path class="ja16gkbxc wm-shine"/><path class="lopy7pbel wm-shine"/><path class="wm-shine xvrw0ebnr"/></g>`,
		"fallback": "withicons-lunar:pill",
	});
}

export default Component;
