import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd64d3bvp.css';
import '../../css/b/blynalbvu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd64d3bvp"/><rect class="blynalbvu"/>`,
		"fallback": "garden:lock-unlocked-fill-16",
	});
}

export default Component;
