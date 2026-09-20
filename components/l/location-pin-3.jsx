import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g31y9g1hb.css';
import '../../css/p/pxjiue5kp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g31y9g1hb"/><path class="pxjiue5kp"/></g>`,
		"fallback": "streamline:location-pin-3",
	});
}

export default Component;
