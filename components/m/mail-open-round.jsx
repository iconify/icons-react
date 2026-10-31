import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqc1w9lyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqc1w9lyn"/>`,
		"fallback": "coolicons:mail-open-round",
	});
}

export default Component;
