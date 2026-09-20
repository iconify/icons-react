import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7fgkjtnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7fgkjtnp"/>`,
		"fallback": "ri:volume-vibrate-line",
	});
}

export default Component;
