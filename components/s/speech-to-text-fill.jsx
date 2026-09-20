import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq3abbc4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq3abbc4w"/>`,
		"fallback": "ri:speech-to-text-fill",
	});
}

export default Component;
