import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl5-w3b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl5-w3b5e"/>`,
		"fallback": "mdi:shield-cross-outline",
	});
}

export default Component;
