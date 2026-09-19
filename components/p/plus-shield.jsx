import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnm2d4hge.css';
import '../../css/u/ufqvjm-rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnm2d4hge"/><path class="ufqvjm-rq"/>`,
		"fallback": "boxicons:plus-shield",
	});
}

export default Component;
