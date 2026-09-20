import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcqg5r2oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcqg5r2oe"/>`,
		"fallback": "typcn:spanner",
	});
}

export default Component;
