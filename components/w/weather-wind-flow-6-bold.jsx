import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8df8ibqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8df8ibqg"/>`,
		"fallback": "streamline-ultimate:weather-wind-flow-6-bold",
	});
}

export default Component;
