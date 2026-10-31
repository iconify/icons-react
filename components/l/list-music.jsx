import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/few3uy9id.css';
import '../../css/j/jbb2pdblg.css';
import '../../css/h/h0e6oen5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpAXIObfS" x1="0" x2="0" y1="3.01" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGtcE3HeTB" x1="2.01" x2="22.49" y1="3.01" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGpAXIObfS)" stroke="url(#SVGtcE3HeTB)" class="few3uy9id wm-k"/><path fill="url(#SVGtcE3HeTB)" class="jbb2pdblg wm-a"/><path class="h0e6oen5p wm-shine"/></g>`,
		"fallback": "withicons-lunar:list-music",
	});
}

export default Component;
