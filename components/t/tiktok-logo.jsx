import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbzm_tbxv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbzm_tbxv"/>`,
		"fallback": "ix:tiktok-logo",
	});
}

export default Component;
