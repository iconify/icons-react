import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtsxvz0cl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtsxvz0cl"/>`,
		"fallback": "roentgen:palm-bottom-right-horizontal-line",
	});
}

export default Component;
