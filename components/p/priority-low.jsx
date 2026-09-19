import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1-w6z7eh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1-w6z7eh"/>`,
		"fallback": "carbon:priority-low",
	});
}

export default Component;
