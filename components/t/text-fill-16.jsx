import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbb8rq6gw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbb8rq6gw"/>`,
		"fallback": "garden:text-fill-16",
	});
}

export default Component;
