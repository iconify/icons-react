import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/a/ai-0gsb7x.css';
import '../../css/l/l72mvqbwd.css';
import '../../css/g/g7kja1z7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtW8ZObwk" x1="1.01" x2="23" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGtW8ZObwk)" class="ai-0gsb7x wm-k"/><path class="l72mvqbwd wm-shine"/><path class="g7kja1z7s wm-shine"/></g>`,
		"fallback": "withicons-lunar:rectangle-ellipsis",
	});
}

export default Component;
