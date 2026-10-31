import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/m/minpde8av.css';
import '../../css/o/obqn-ebnq.css';
import '../../css/a/ak2rlcx3i.css';
import '../../css/j/jun6yqbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGsGHfNeKS" x1="0" x2="0" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG4p0p7qaJ" x1="3.5" x2="20.48" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGsGHfNeKS)" stroke="url(#SVG4p0p7qaJ)" class="minpde8av wm-k"/><path stroke="url(#SVG4p0p7qaJ)" class="obqn-ebnq wm-s"/><path class="ak2rlcx3i wm-shine"/><path class="jun6yqbvb wm-shine"/></g>`,
		"fallback": "withicons-lunar:map-pin-plus",
	});
}

export default Component;
