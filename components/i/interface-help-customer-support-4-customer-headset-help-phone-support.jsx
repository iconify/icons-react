import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drhte3_lk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drhte3_lk"/>`,
		"fallback": "streamline:interface-help-customer-support-4-customer-headset-help-phone-support",
	});
}

export default Component;
