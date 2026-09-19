import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9c6y2b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9c6y2b5w"/>`,
		"fallback": "hugeicons:modern-tv",
	});
}

export default Component;
