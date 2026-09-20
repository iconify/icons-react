import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sphduib2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sphduib2i"/>`,
		"fallback": "mdi:stopwatch-lock",
	});
}

export default Component;
