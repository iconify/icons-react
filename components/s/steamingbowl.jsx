import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duaw5cc7b.css';
import '../../css/e/ey7ax6mbr.css';
import '../../css/f/f43nj2b_y.css';
import '../../css/p/p_f4-0bgh.css';
import '../../css/i/i8ygcgcxc.css';
import '../../css/t/tjauieswd.css';
import '../../css/v/vd-wqvbqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duaw5cc7b"/><path class="ey7ax6mbr"/><path class="f43nj2b_y"/><path class="p_f4-0bgh"/><path class="i8ygcgcxc"/><path class="tjauieswd"/><path class="vd-wqvbqn"/>`,
		"fallback": "fxemoji:steamingbowl",
	});
}

export default Component;
