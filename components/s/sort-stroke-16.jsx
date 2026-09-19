import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbe60jbhd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbe60jbhd"/>`,
		"fallback": "garden:sort-stroke-16",
	});
}

export default Component;
