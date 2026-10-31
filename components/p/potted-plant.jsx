import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/urfg94b9y.css';
import '../../css/q/qu4x12bxk.css';
import '../../css/h/hlmz_0b2h.css';
import '../../css/f/f9-u3kbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGU1j0uUjm" x1="0" x2="0" y1="2.02" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGxj6bxdjJ" x1="3" x2="21" y1="2.02" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGU1j0uUjm)" stroke="url(#SVGxj6bxdjJ)" class="urfg94b9y wm-k"/><path fill="url(#SVGxj6bxdjJ)" class="qu4x12bxk wm-a"/><path class="hlmz_0b2h wm-shine"/><path class="f9-u3kbbi wm-shine"/></g>`,
		"fallback": "withicons-lunar:potted-plant",
	});
}

export default Component;
