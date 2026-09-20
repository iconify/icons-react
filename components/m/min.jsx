import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktpxm8blb.css';
import '../../css/f/fpjy57bvv.css';
import '../../css/k/kzwsevvuf.css';
import '../../css/i/iemzgbsak.css';
import '../../css/a/a7j358bpo.css';
import '../../css/l/l8gkojm2l.css';
import '../../css/z/z7bh8zbgi.css';
import '../../css/n/nt3cnzbwz.css';
import '../../css/g/gokhssbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktpxm8blb"/><path class="fpjy57bvv"/><path class="kzwsevvuf"/><path class="iemzgbsak"/><path class="a7j358bpo"/><path class="l8gkojm2l"/><path class="z7bh8zbgi"/><path class="nt3cnzbwz"/><path class="gokhssbfx"/>`,
		"fallback": "token:min",
	});
}

export default Component;
