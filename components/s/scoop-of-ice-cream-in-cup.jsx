import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf446b7gd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf446b7gd"/>`,
		"fallback": "pinhead:scoop-of-ice-cream-in-cup",
	});
}

export default Component;
