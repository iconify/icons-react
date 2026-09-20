import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n96p5pben.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n96p5pben"/>`,
		"fallback": "lsicon:open-new-outline",
	});
}

export default Component;
