import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgvtz8b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgvtz8b-z"/>`,
		"fallback": "tabler:lens-convex",
	});
}

export default Component;
