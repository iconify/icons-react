import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1lc-wt4o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1lc-wt4o"/>`,
		"fallback": "pinhead:pixel-transit-vehicle-on-railway-track",
	});
}

export default Component;
