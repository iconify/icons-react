import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/g/go-2sbvoc.css';
import '../../css/y/y6hhylb-q.css';
import '../../css/q/q_zb18bot.css';
import '../../css/f/f283b15mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5EEq0Zfp" x1="0" x2="0" y1="1.76" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGHc9YkbSE" x1=".75" x2="21.49" y1="1.76" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG5EEq0Zfp)" stroke="url(#SVGHc9YkbSE)" class="go-2sbvoc wm-k"/><path fill="url(#SVGHc9YkbSE)" class="wm-a y6hhylb-q"/><path class="q_zb18bot wm-shine"/><path class="f283b15mg wm-shine"/></g>`,
		"fallback": "withicons-lunar:thermometer-sun",
	});
}

export default Component;
