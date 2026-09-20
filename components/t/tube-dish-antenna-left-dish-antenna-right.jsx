import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v97ouibln.css';
import '../../css/z/zisei9b2e.css';
import '../../css/w/wmejmsbwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v97ouibln"/><path class="zisei9b2e"/><path class="wmejmsbwo"/>`,
		"fallback": "roentgen:tube-dish-antenna-left-dish-antenna-right",
	});
}

export default Component;
