import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn0076hxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn0076hxp"/>`,
		"fallback": "boxicons:shape-unite-filled",
	});
}

export default Component;
