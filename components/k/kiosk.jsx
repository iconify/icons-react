import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0q2lackj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0q2lackj"/>`,
		"fallback": "roentgen:kiosk",
	});
}

export default Component;
