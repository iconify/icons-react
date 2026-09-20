import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf6vdpo6e.css';
import '../../css/p/ppy3-er_s.css';
import '../../css/n/nbc91yb5f.css';
import '../../css/w/wgnfdbbso.css';
import '../../css/k/kd60ief2y.css';
import '../../css/f/f253fb81r.css';
import '../../css/m/m66alxb5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf6vdpo6e"/><linearGradient id="SVGXHmm1cNX" x1="110.989" x2="463.527" y1="265.812" y2="248.007" gradientTransform="matrix(1 0 0 -1 0 513)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ppy3-er_s"/><stop offset=".4" class="ppy3-er_s"/><stop offset=".83" class="nbc91yb5f"/><stop offset="1" class="wgnfdbbso"/></linearGradient><path fill="url(#SVGXHmm1cNX)" class="kd60ief2y"/><linearGradient id="SVGxkIKPcNd" x1="73.757" x2="73.757" y1="179.548" y2="309.525" gradientTransform="matrix(1 0 0 -1 0 513)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wgnfdbbso"/><stop offset="1" class="f253fb81r"/></linearGradient><path fill="url(#SVGxkIKPcNd)" class="m66alxb5l"/>`,
		"fallback": "selfhst:meta",
	});
}

export default Component;
