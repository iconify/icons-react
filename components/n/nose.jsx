import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xucuw-bde.css';
import '../../css/y/y8gwbgbko.css';
import '../../css/n/nu3mrp6zx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xucuw-bde"/><path class="y8gwbgbko"/><path class="nu3mrp6zx"/>`,
		"fallback": "fxemoji:nose",
	});
}

export default Component;
