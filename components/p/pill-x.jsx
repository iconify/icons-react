import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-226492u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-226492u"/>`,
		"fallback": "noviair:pill-x",
	});
}

export default Component;
