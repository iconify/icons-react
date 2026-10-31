import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uleem9bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uleem9bbm"/>`,
		"fallback": "coolicons:pin-round",
	});
}

export default Component;
