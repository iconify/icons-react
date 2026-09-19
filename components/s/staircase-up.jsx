import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axg6-fbdp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axg6-fbdp"/>`,
		"fallback": "at-icons:staircase-up",
	});
}

export default Component;
