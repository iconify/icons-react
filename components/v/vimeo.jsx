import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu__29aqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu__29aqv"/>`,
		"fallback": "mdi:vimeo",
	});
}

export default Component;
