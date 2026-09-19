import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkt_eriht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkt_eriht"/>`,
		"fallback": "cbi:openwrt-logo",
	});
}

export default Component;
