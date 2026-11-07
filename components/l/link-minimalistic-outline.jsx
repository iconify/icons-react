import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu-jqnb_g.css';
import '../../css/j/j50599bqy.css';
import '../../css/y/ykm7xbcmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu-jqnb_g"/><path class="j50599bqy"/><path class="ykm7xbcmi"/>`,
		"fallback": "solar:link-minimalistic-outline",
	});
}

export default Component;
