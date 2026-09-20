import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz0rugjke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz0rugjke"/>`,
		"fallback": "streamline-ultimate:smart-watch-square-power-bold",
	});
}

export default Component;
