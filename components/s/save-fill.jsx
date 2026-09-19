import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrjuh8bfk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrjuh8bfk"/>`,
		"fallback": "bi:save-fill",
	});
}

export default Component;
