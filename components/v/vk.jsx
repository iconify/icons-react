import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmm02yz3c.css';
import '../../css/m/mc6ws4xxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmm02yz3c"/><path class="mc6ws4xxz"/>`,
		"fallback": "uim:vk",
	});
}

export default Component;
