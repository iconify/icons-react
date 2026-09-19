import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_-p3bvlv.css';

const viewBox = {"width":2176,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_-p3bvlv"/>`,
		"fallback": "fa:space-shuttle",
	});
}

export default Component;
