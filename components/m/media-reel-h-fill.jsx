import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1-3iubmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1-3iubmd"/>`,
		"fallback": "mage:media-reel-h-fill",
	});
}

export default Component;
