import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/fq8y4lb3i.css';
import '../../css/h/htwmi2bjh.css';
import '../../css/g/ggvp_bb8t.css';
import '../../css/k/klk3gibts.css';
import '../../css/k/krjebkcrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKZDiwdQA" x1="0" x2="0" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGJUznddGE" x1="1.02" x2="23" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGKZDiwdQA)" stroke="url(#SVGJUznddGE)" class="fq8y4lb3i wm-k"/><path fill="url(#SVGJUznddGE)" class="htwmi2bjh wm-a"/><path stroke="url(#SVGJUznddGE)" class="ggvp_bb8t wm-s"/><path class="klk3gibts wm-shine"/><path class="krjebkcrb wm-shine"/></g>`,
		"fallback": "withicons-lunar:screen-share",
	});
}

export default Component;
