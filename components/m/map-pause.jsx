import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msrdi5bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msrdi5bfq"/>`,
		"fallback": "tabler:map-pause",
	});
}

export default Component;
