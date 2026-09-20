import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u1a1xct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4u1a1xct"/>`,
		"fallback": "ri:multi-image-fill",
	});
}

export default Component;
