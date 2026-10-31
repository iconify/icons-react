import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/nw12-ccwq.css';
import '../../css/u/uipte0bqf.css';
import '../../css/n/n8fbmgb7l.css';
import '../../css/i/iwwzmy3rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhXw6Jdlk" x1="0" x2="0" y1="1.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGwuLSgbcC" x1="1.75" x2="22.99" y1="1.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGhXw6Jdlk)" stroke="url(#SVGwuLSgbcC)" class="nw12-ccwq wm-k"/><path fill="url(#SVGwuLSgbcC)" class="uipte0bqf wm-a"/><path stroke="url(#SVGwuLSgbcC)" class="n8fbmgb7l wm-s"/><path class="iwwzmy3rt wm-shine"/></g>`,
		"fallback": "withicons-lunar:sparkler",
	});
}

export default Component;
