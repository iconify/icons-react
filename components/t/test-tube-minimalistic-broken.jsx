import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxcvi3b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxcvi3b3o"/>`,
		"fallback": "solar:test-tube-minimalistic-broken",
	});
}

export default Component;
