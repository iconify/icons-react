import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er71-_bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er71-_bju"/>`,
		"fallback": "ri:smartphone-fill",
	});
}

export default Component;
