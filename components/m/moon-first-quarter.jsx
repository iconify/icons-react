import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko2bjacnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko2bjacnc"/>`,
		"fallback": "mdi:moon-first-quarter",
	});
}

export default Component;
