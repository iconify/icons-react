import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb0xcujan.css';
import '../../css/u/uxqwpab0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb0xcujan"/><path class="uxqwpab0d"/>`,
		"fallback": "solar:stars-bold",
	});
}

export default Component;
