import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1ax0lebc.css';
import '../../css/n/nyn0a-12z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1ax0lebc"/><path class="nyn0a-12z"/>`,
		"fallback": "solar:star-off-bold",
	});
}

export default Component;
