import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q75sdk05z.css';

const viewBox = {"width":432,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q75sdk05z"/>`,
		"fallback": "zmdi:steam",
	});
}

export default Component;
