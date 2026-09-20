import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6_e7pqol.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6_e7pqol"/>`,
		"fallback": "qlementine-icons:refresh-16",
	});
}

export default Component;
