import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju7fwpb1e.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju7fwpb1e"/>`,
		"fallback": "topcoat:w3c",
	});
}

export default Component;
