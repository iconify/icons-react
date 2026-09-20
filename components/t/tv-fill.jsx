import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiu2e4bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiu2e4bsi"/>`,
		"fallback": "ri:tv-fill",
	});
}

export default Component;
