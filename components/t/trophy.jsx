import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubgljw8ou.css';
import '../../css/e/etxjo6flc.css';
import '../../css/m/m5_73rb4d.css';
import '../../css/c/cukivjsit.css';
import '../../css/k/kk4uo0bqy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubgljw8ou"/><path class="etxjo6flc"/><path class="m5_73rb4d"/><ellipse class="cukivjsit"/><path class="kk4uo0bqy"/>`,
		"fallback": "fxemoji:trophy",
	});
}

export default Component;
