import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l365gobtg.css';
import '../../css/q/quk3w1rkk.css';
import '../../css/d/dhvxxlktw.css';
import '../../css/o/oihqisbao.css';
import '../../css/s/sy0g6cb_e.css';
import '../../css/f/fjyin86cm.css';
import '../../css/w/wdt28g15u.css';
import '../../css/v/vemrge9-g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l365gobtg"/><path class="quk3w1rkk"/><path class="dhvxxlktw"/><path class="oihqisbao"/><path class="sy0g6cb_e"/><path class="fjyin86cm"/><circle class="wdt28g15u"/><path class="vemrge9-g"/>`,
		"fallback": "openmoji:mobile-phone-off",
	});
}

export default Component;
