import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8u24qb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8u24qb7l"/>`,
		"fallback": "tabler:stroke-curved",
	});
}

export default Component;
