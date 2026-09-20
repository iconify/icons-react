import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/m/m32r68bkv.css';
import '../../css/u/uinv5kb7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><path class="m32r68bkv"/><path class="uinv5kb7l"/></g>`,
		"fallback": "thesvg-color:nordpass",
	});
}

export default Component;
