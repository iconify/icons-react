import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm_0b6bit.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm_0b6bit"/>`,
		"fallback": "wi:moon-waxing-gibbous-5",
	});
}

export default Component;
