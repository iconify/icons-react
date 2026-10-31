import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we0drpbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we0drpbyg"/>`,
		"fallback": "coolicons:signal-low-round",
	});
}

export default Component;
