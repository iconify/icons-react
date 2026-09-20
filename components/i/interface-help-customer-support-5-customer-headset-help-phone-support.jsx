import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gv35bhbkz.css';
import '../../css/o/o8ap-ybke.css';
import '../../css/r/rwhb6ox2w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="gv35bhbkz"/><rect class="o8ap-ybke"/><path class="rwhb6ox2w"/></g>`,
		"fallback": "streamline:interface-help-customer-support-5-customer-headset-help-phone-support",
	});
}

export default Component;
