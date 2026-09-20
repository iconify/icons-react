import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3k-9dnhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3k-9dnhh"/>`,
		"fallback": "mdi:signal-cellular-3",
	});
}

export default Component;
