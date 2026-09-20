import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7zaetehw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7zaetehw"/>`,
		"fallback": "mdi:robot-love-outline",
	});
}

export default Component;
