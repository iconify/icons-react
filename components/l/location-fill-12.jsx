import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4y1kvb4n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4y1kvb4n"/>`,
		"fallback": "garden:location-fill-12",
	});
}

export default Component;
