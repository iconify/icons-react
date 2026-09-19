import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fne8_2cyb.css';
import '../../css/f/fb8tbxvyp.css';
import '../../css/b/bsys6tb1q.css';
import '../../css/b/bm17v2acr.css';
import '../../css/v/vbzbhtims.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fne8_2cyb"/><path class="fb8tbxvyp"/><path class="bsys6tb1q"/><path class="bm17v2acr"/><path class="vbzbhtims"/>`,
		"fallback": "fxemoji:present",
	});
}

export default Component;
