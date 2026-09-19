import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-xh-qa5n.css';
import '../../css/f/f3mrsjblx.css';
import '../../css/d/dhvs4l53i.css';
import '../../css/p/p-nkmx3el.css';
import '../../css/i/iddjrgb2g.css';
import '../../css/u/ubu678bwn.css';
import '../../css/p/ppp7v-bvc.css';
import '../../css/n/n6_un4glf.css';
import '../../css/m/mg7i_ub1k.css';
import '../../css/q/q9rb26bdt.css';
import '../../css/k/kwup4_xqh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-xh-qa5n"/><path class="f3mrsjblx"/><path class="dhvs4l53i"/><path class="p-nkmx3el"/><path class="iddjrgb2g"/><path class="ubu678bwn"/><path class="ppp7v-bvc"/><path class="n6_un4glf"/><ellipse class="mg7i_ub1k"/><path class="q9rb26bdt"/><path class="kwup4_xqh"/>`,
		"fallback": "devicon:redis-wordmark",
	});
}

export default Component;
