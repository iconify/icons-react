import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3dnrk_0v.css';
import '../../css/b/b6kz81jcw.css';
import '../../css/l/lt_dvue1n.css';
import '../../css/w/wuug2ccjk.css';
import '../../css/s/sl_boeb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3dnrk_0v"/><path class="b6kz81jcw"/><path class="lt_dvue1n"/><path class="wuug2ccjk"/><path class="sl_boeb5j"/>`,
		"fallback": "solar:lock-password-unlocked-bold-duotone",
	});
}

export default Component;
