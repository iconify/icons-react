import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz4d19ipl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz4d19ipl"/>`,
		"fallback": "roentgen:turning-loop",
	});
}

export default Component;
