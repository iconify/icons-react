import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0pil_dpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0pil_dpi"/>`,
		"fallback": "mdi:terminal-line",
	});
}

export default Component;
