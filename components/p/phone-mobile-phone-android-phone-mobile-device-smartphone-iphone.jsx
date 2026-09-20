import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uo5h1db1c.css';
import '../../css/b/b0_qm-b_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="uo5h1db1c"/><path class="b0_qm-b_i"/></g>`,
		"fallback": "streamline:phone-mobile-phone-android-phone-mobile-device-smartphone-iphone",
	});
}

export default Component;
