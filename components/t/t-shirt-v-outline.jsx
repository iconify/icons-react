import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyqt1zbva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyqt1zbva"/>`,
		"fallback": "mdi:t-shirt-v-outline",
	});
}

export default Component;
