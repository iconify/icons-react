import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypfwpeqha.css';
import '../../css/t/tqahksbtl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypfwpeqha"/><path class="tqahksbtl"/>`,
		"fallback": "selfhst:openwrt",
	});
}

export default Component;
