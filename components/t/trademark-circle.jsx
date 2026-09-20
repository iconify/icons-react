import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb3sy8b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb3sy8b4s"/>`,
		"fallback": "uil:trademark-circle",
	});
}

export default Component;
