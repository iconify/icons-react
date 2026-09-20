import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrtt16bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrtt16bze"/>`,
		"fallback": "mynaui:mobile-signal-one-solid",
	});
}

export default Component;
