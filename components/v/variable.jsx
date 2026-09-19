import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shkos6b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shkos6b8z"/>`,
		"fallback": "boxicons:variable",
	});
}

export default Component;
