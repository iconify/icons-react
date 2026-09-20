import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj5w7lbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj5w7lbbn"/>`,
		"fallback": "pixelarticons:trending-up",
	});
}

export default Component;
