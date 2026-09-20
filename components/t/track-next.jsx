import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueh3k2czz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueh3k2czz"/>`,
		"fallback": "tabler:track-next",
	});
}

export default Component;
