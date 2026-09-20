import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec060xbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec060xbbe"/>`,
		"fallback": "mdi:piggy-bank-outline",
	});
}

export default Component;
