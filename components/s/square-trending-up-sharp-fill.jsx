import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woe3q0b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woe3q0b4a"/>`,
		"fallback": "keyline-icons:square-trending-up-sharp-fill",
	});
}

export default Component;
