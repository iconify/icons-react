import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkyy27shr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkyy27shr"/>`,
		"fallback": "mdi:mushroom-outline",
	});
}

export default Component;
