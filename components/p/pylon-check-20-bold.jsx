import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0wb4ed2k.css';
import '../../css/f/f_xu_qnbj.css';
import '../../css/i/ihxuxpo9x.css';
import '../../css/l/lxnvu-bcj.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/f/f0f2e6b1o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0wb4ed2k"/><path class="f_xu_qnbj"/><path class="ihxuxpo9x"/><path class="lxnvu-bcj"/><path class="aqsnv9bnd"/><path class="f0f2e6b1o"/>`,
		"fallback": "energy-icons:pylon-check-20-bold",
	});
}

export default Component;
