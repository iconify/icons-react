import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riv2d9n9z.css';
import '../../css/j/j10j52bca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="riv2d9n9z"/><path class="j10j52bca"/>`,
		"fallback": "solar:star-off-outline",
	});
}

export default Component;
