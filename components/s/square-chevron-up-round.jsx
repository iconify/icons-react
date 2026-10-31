import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrp-9wbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrp-9wbbt"/>`,
		"fallback": "coolicons:square-chevron-up-round",
	});
}

export default Component;
