import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/ve-ah955g.css';
import '../../css/l/ljtvecboc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ve-ah955g"/><path class="ljtvecboc"/></g>`,
		"fallback": "streamline:interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support",
	});
}

export default Component;
