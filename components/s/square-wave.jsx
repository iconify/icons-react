import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie-z9d60e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie-z9d60e"/>`,
		"fallback": "at-icons:square-wave",
	});
}

export default Component;
