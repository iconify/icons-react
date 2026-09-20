import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw9r1w66o.css';
import '../../css/k/kvq9f4byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw9r1w66o"/><path class="kvq9f4byf"/>`,
		"fallback": "token:purse",
	});
}

export default Component;
