import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqw9hh_pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqw9hh_pq"/>`,
		"fallback": "pixelarticons:lock-open",
	});
}

export default Component;
