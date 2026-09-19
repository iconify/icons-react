import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr-wldb3q.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr-wldb3q"/>`,
		"fallback": "gis:regular-shape",
	});
}

export default Component;
