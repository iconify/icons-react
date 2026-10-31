import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/nobvziswe.css';
import '../../css/h/h9v1zacoq.css';
import '../../css/y/y5vqzubzo.css';
import '../../css/t/tpdvxubdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8oY1DbSF" x1="0" x2="0" y1="1.51" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGN4FNvchE" x1="1.5" x2="22.5" y1="1.51" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG8oY1DbSF)" stroke="url(#SVGN4FNvchE)" class="nobvziswe wm-k"/><path fill="url(#SVGN4FNvchE)" class="h9v1zacoq wm-a"/><path class="wm-shine y5vqzubzo"/><path class="tpdvxubdo wm-shine"/></g>`,
		"fallback": "withicons-lunar:sailboat",
	});
}

export default Component;
