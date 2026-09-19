import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c625b_u-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c625b_u-c"/>`,
		"fallback": "game-icons:pay-money",
	});
}

export default Component;
