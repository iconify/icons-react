import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knj0e0bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knj0e0bmr"/>`,
		"fallback": "mage:tiktok-circle",
	});
}

export default Component;
