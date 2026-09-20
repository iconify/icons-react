import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfy5fyr1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfy5fyr1d"/>`,
		"fallback": "mage:minus-circle-fill",
	});
}

export default Component;
