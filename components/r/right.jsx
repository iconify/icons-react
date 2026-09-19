import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvn6qn9gu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvn6qn9gu"/>`,
		"fallback": "ep:right",
	});
}

export default Component;
