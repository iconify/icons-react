import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylaicorwm.css';
import '../../css/s/su7a0euxn.css';
import '../../css/n/np4ropmkg.css';
import '../../css/b/bg3wu7bxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylaicorwm"/><path class="su7a0euxn"/><path class="np4ropmkg"/><path class="bg3wu7bxo"/>`,
		"fallback": "energy-icons:usb-48-bold",
	});
}

export default Component;
