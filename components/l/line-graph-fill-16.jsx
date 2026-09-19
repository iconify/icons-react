import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3lemkowc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3lemkowc"/>`,
		"fallback": "garden:line-graph-fill-16",
	});
}

export default Component;
