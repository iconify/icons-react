import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0s7smh9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0s7smh9s"/>`,
		"fallback": "roentgen:no-traffic-signals",
	});
}

export default Component;
