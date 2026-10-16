import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z15me-ble.css';
import '../../css/c/ctxclkbxg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z15me-ble"/><path class="ctxclkbxg"/>`,
		"fallback": "energy-icons:vr-headset-20",
	});
}

export default Component;
