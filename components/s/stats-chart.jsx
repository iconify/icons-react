import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxdn0e28r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxdn0e28r"/>`,
		"fallback": "ion:stats-chart",
	});
}

export default Component;
