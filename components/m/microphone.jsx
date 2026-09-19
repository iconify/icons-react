import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe0j13bar.css';
import '../../css/y/y7bs-t6_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe0j13bar"/><path class="y7bs-t6_r"/>`,
		"fallback": "bxs:microphone",
	});
}

export default Component;
