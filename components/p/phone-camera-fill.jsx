import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6s5vmn0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6s5vmn0w"/>`,
		"fallback": "ri:phone-camera-fill",
	});
}

export default Component;
