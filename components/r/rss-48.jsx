import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewkhhrb_j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewkhhrb_j"/>`,
		"fallback": "energy-icons:rss-48",
	});
}

export default Component;
