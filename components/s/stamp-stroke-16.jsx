import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fymcpc12t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fymcpc12t"/>`,
		"fallback": "garden:stamp-stroke-16",
	});
}

export default Component;
