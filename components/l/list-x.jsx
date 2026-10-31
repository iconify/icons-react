import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/bntif01uf.css';
import '../../css/y/yt9-25bgs.css';
import '../../css/g/grf-wq-bj.css';
import '../../css/h/hnsqxefzs.css';
import '../../css/y/ypcz7mbuy.css';
import '../../css/k/kpant3bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGnHlBpckR" x1="10" x2="14" y1="5" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="bntif01uf wm-k"/><path class="wm-s yt9-25bgs"/><path class="grf-wq-bj wm-deco"/><path fill="url(#SVGnHlBpckR)" class="hnsqxefzs wm-k"/><path class="wm-s ypcz7mbuy"/><path class="kpant3bja wm-shadow"/></g>`,
		"fallback": "withicons-valentine:list-x",
	});
}

export default Component;
