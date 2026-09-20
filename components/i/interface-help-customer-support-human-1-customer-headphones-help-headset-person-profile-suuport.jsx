import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xa2w_zv3q.css';
import '../../css/p/pzd0xibea.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="xa2w_zv3q"/><path class="pzd0xibea"/></g>`,
		"fallback": "streamline:interface-help-customer-support-human-1-customer-headphones-help-headset-person-profile-suuport",
	});
}

export default Component;
