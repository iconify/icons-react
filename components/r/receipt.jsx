import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3-hujoeb.css';
import '../../css/w/w5cu6gb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3-hujoeb"/><path class="w5cu6gb4d"/>`,
		"fallback": "boxicons:receipt",
	});
}

export default Component;
