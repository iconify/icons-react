import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryi59f59s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryi59f59s"/>`,
		"fallback": "iconaut:sparkle",
	});
}

export default Component;
