import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9li6fwhq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9li6fwhq"/>`,
		"fallback": "garden:text-fill-12",
	});
}

export default Component;
