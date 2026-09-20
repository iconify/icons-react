import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quzxhsgmn.css';
import '../../css/o/o3q9lk3_p.css';
import '../../css/n/nw-hxrxlx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quzxhsgmn"/><path class="o3q9lk3_p"/><path class="nw-hxrxlx"/>`,
		"fallback": "selfhst:vouchervault",
	});
}

export default Component;
