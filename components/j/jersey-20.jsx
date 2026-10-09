import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-h4xkbtz.css';
import '../../css/p/p1ofzbbnm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-h4xkbtz"/><path class="p1ofzbbnm"/>`,
		"fallback": "energy-icons:jersey-20",
	});
}

export default Component;
