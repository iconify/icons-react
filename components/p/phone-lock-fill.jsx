import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adelsmf5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adelsmf5h"/>`,
		"fallback": "ri:phone-lock-fill",
	});
}

export default Component;
