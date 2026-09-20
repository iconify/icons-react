import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5v3h_0wx.css';
import '../../css/h/ht7jy51cn.css';
import '../../css/w/w14eijbgv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5v3h_0wx"/><path class="ht7jy51cn"/><path class="w14eijbgv"/>`,
		"fallback": "selfhst:truenas-scale",
	});
}

export default Component;
