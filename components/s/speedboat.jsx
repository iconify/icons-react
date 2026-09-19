import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qks78sb5k.css';
import '../../css/t/t3g9414ks.css';
import '../../css/e/ex6n4lbkk.css';
import '../../css/f/ftdcr_baf.css';
import '../../css/t/t_2hkac8u.css';
import '../../css/s/st53awbpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qks78sb5k"/><path class="t3g9414ks"/><path class="ex6n4lbkk"/><path class="ftdcr_baf"/><path class="t_2hkac8u"/><path class="st53awbpp"/></g>`,
		"fallback": "fluent-emoji-flat:speedboat",
	});
}

export default Component;
