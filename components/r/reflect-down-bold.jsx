import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk6a7rbpz.css';
import '../../css/y/ya8a87bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk6a7rbpz"/><path class="ya8a87bqr"/>`,
		"fallback": "streamline-ultimate:reflect-down-bold",
	});
}

export default Component;
