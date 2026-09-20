import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq73-t5vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq73-t5vc"/>`,
		"fallback": "mingcute:map-2-line",
	});
}

export default Component;
