import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl8zs6bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl8zs6bvu"/>`,
		"fallback": "streamline-logos:spinrilla-logo",
	});
}

export default Component;
