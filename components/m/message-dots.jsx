import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w__oz7bxg.css';
import '../../css/k/k_lqyobox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w__oz7bxg"/><path class="k_lqyobox"/>`,
		"fallback": "pixel:message-dots",
	});
}

export default Component;
