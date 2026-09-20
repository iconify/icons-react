import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o11scyb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o11scyb1q"/>`,
		"fallback": "streamline-ultimate:trip-road-bold",
	});
}

export default Component;
