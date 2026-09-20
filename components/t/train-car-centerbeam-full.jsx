import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg5c0-v8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg5c0-v8p"/>`,
		"fallback": "mdi:train-car-centerbeam-full",
	});
}

export default Component;
