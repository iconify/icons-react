import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9m8_1bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9m8_1bps"/>`,
		"fallback": "solar:planet-outline",
	});
}

export default Component;
