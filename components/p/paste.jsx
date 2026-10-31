import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/vjkopab5s.css';
import '../../css/h/hrmdnaclf.css';
import '../../css/g/g89k9ccch.css';
import '../../css/v/vg5qxubqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQc3tC3Al" x1="0" x2="0" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGh1xnFe9N" x1="2" x2="22" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGQc3tC3Al)" stroke="url(#SVGh1xnFe9N)" class="vjkopab5s wm-k"/><path fill="url(#SVGh1xnFe9N)" class="hrmdnaclf wm-a"/><path class="g89k9ccch wm-shine"/><path class="vg5qxubqs wm-shine"/></g>`,
		"fallback": "withicons-lunar:paste",
	});
}

export default Component;
