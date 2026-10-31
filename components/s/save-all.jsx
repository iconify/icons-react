import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/vyyh3lsfo.css';
import '../../css/f/fu5lvsban.css';
import '../../css/w/wyn-jrbmu.css';
import '../../css/e/ec9oarbps.css';
import '../../css/c/cdr_3xe3f.css';
import '../../css/g/gmh-vjwfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGehtDBesM" x1="2.01" x2="22" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="vyyh3lsfo wm-k"/><path fill="url(#SVGehtDBesM)" class="fu5lvsban wm-a"/><path class="wm-shine wyn-jrbmu"/><path class="ec9oarbps wm-shine"/><path class="cdr_3xe3f wm-shine"/><path class="gmh-vjwfv wm-shine"/></g>`,
		"fallback": "withicons-lunar:save-all",
	});
}

export default Component;
