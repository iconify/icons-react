import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb1nv6bjq.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb1nv6bjq"/>`,
		"fallback": "topcoat:roundedrectangle-outline",
	});
}

export default Component;
