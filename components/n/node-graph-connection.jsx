import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-hu--bvv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-hu--bvv"/>`,
		"fallback": "at-icons:node-graph-connection",
	});
}

export default Component;
