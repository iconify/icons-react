import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfe-jnboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfe-jnboe"/>`,
		"fallback": "heroicons:shield-exclamation",
	});
}

export default Component;
