import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fucl7wbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fucl7wbdl"/>`,
		"fallback": "ri:speaker-line",
	});
}

export default Component;
