import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_px3vb6e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_px3vb6e"/>`,
		"fallback": "at-icons:video",
	});
}

export default Component;
