import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb-4nob7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb-4nob7h"/>`,
		"fallback": "keyline-icons:link-2-off-fill",
	});
}

export default Component;
