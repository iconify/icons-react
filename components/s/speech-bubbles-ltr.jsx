import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsc5iacwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsc5iacwk"/>`,
		"fallback": "ooui:speech-bubbles-ltr",
	});
}

export default Component;
