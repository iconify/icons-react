import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztxo5g_wx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztxo5g_wx"/>`,
		"fallback": "ion:mail-open",
	});
}

export default Component;
