import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro7zm-t0s.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro7zm-t0s"/>`,
		"fallback": "wi:moon-alt-waning-gibbous-5",
	});
}

export default Component;
