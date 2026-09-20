import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuapx_b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuapx_b0p"/>`,
		"fallback": "ri:sidebar-fold-fill",
	});
}

export default Component;
