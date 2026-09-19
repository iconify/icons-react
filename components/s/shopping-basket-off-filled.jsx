import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2ds8_m2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2ds8_m2k"/>`,
		"fallback": "griddy-icons:shopping-basket-off-filled",
	});
}

export default Component;
