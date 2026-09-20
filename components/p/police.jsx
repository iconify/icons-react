import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpz7tqcjq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpz7tqcjq"/>`,
		"fallback": "map:police",
	});
}

export default Component;
