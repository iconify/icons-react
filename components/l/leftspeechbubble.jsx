import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbb3y-lxp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbb3y-lxp"/>`,
		"fallback": "fxemoji:leftspeechbubble",
	});
}

export default Component;
