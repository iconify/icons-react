import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs00j1q9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs00j1q9h"/>`,
		"fallback": "mdi:stopwatch-add",
	});
}

export default Component;
