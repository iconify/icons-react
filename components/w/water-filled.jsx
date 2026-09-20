import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcf5jt.css';
import '../../css/w/w1kvfb.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-22.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcf5jt"/><path class="w1kvfb"/>`,
		"fallback": "line-md:water-filled",
	});
}

export default Component;
