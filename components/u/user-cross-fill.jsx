import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd6j98biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd6j98biy"/>`,
		"fallback": "mage:user-cross-fill",
	});
}

export default Component;
