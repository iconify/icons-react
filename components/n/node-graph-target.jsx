import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oer3upb7f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oer3upb7f"/>`,
		"fallback": "at-icons:node-graph-target",
	});
}

export default Component;
