import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0dchj1_o.css';
import '../../css/n/n0n3q2bzz.css';
import '../../css/n/nck3jf4bf.css';
import '../../css/t/tfdeh6r_u.css';
import '../../css/w/w_v5gjbli.css';
import '../../css/m/mvfn51b6m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0dchj1_o"/><path class="n0n3q2bzz"/><path class="nck3jf4bf"/><path class="tfdeh6r_u"/><path class="w_v5gjbli"/><path class="mvfn51b6m"/>`,
		"fallback": "fxemoji:ram",
	});
}

export default Component;
