import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycr268boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycr268boj"/>`,
		"fallback": "tdesign:map-unlocked-filled",
	});
}

export default Component;
