import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aqtyesbwn.css';
import '../../css/q/qr90g_bcv.css';
import '../../css/e/ewsav27ph.css';
import '../../css/f/fago-0h9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="aqtyesbwn"/><path class="qr90g_bcv"/><circle class="ewsav27ph"/><path class="fago-0h9c"/></g>`,
		"fallback": "bitcoin-icons:tip-jar-outline",
	});
}

export default Component;
