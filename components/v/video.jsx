import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuexo0a4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuexo0a4k"/>`,
		"fallback": "rivet-icons:video",
	});
}

export default Component;
