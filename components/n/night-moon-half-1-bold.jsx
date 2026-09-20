import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcb9oqsfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcb9oqsfa"/>`,
		"fallback": "streamline-ultimate:night-moon-half-1-bold",
	});
}

export default Component;
