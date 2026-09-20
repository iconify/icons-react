import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w8o-t1qhy.css';
import '../../css/v/vpml54dlz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w8o-t1qhy"/><path class="vpml54dlz"/></g>`,
		"fallback": "streamline-flex:less-than-sign-circle",
	});
}

export default Component;
