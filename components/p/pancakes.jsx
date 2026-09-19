import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvpctmiuj.css';
import '../../css/p/pogbqsb-k.css';
import '../../css/n/nryzo_bjt.css';
import '../../css/y/y6p-vj8xm.css';
import '../../css/r/rruo2ybwv.css';
import '../../css/v/v7uh30_eu.css';
import '../../css/e/ey_eivbdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvpctmiuj"/><path class="pogbqsb-k"/><path class="nryzo_bjt"/><path class="y6p-vj8xm"/><path class="rruo2ybwv"/><path class="v7uh30_eu"/><path class="ey_eivbdy"/></g>`,
		"fallback": "fluent-emoji-flat:pancakes",
	});
}

export default Component;
