import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/w5qzg4taz.css';
import '../../css/w/w_hlspw7r.css';
import '../../css/b/b5wee0jzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGaUst8bPZ" x1="0" x2="0" y1="2.75" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGW3lZqbWC" x1="3.5" x2="20.49" y1="2.75" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGaUst8bPZ)" stroke="url(#SVGW3lZqbWC)" class="w5qzg4taz wm-k"/><path fill="url(#SVGW3lZqbWC)" class="w_hlspw7r wm-a"/><path class="b5wee0jzi wm-shine"/></g>`,
		"fallback": "withicons-lunar:radio-tower",
	});
}

export default Component;
