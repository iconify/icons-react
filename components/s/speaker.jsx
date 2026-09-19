import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3u0_wbck.css';
import '../../css/y/yalmj9bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3u0_wbck"/><path class="yalmj9bpd"/>`,
		"fallback": "circum:speaker",
	});
}

export default Component;
