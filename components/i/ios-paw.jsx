import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhd6iub4d.css';
import '../../css/p/p48qkyb0w.css';
import '../../css/l/lf3litbkr.css';
import '../../css/n/nc7_r_bsg.css';
import '../../css/f/fxx_6rb8s.css';
import '../../css/t/tyjx4fb0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhd6iub4d"/><path class="p48qkyb0w"/><path class="lf3litbkr"/><path class="nc7_r_bsg"/><path class="fxx_6rb8s"/><path class="tyjx4fb0r"/>`,
		"fallback": "ion:ios-paw",
	});
}

export default Component;
