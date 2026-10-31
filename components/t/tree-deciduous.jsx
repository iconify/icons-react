import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/n1byttcku.css';
import '../../css/d/dd88abb9i.css';
import '../../css/c/c3i-o7rwd.css';
import '../../css/r/r0qyprbby.css';
import '../../css/k/ki0_dacba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG7EcJueBA" x1="2.51" x2="21.5" y1="1.47" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVG7EcJueBA)" class="n1byttcku wm-k"/><path class="dd88abb9i wm-shine"/><path class="c3i-o7rwd wm-shine"/><path class="r0qyprbby wm-shine"/><path class="ki0_dacba wm-shine"/></g>`,
		"fallback": "withicons-lunar:tree-deciduous",
	});
}

export default Component;
