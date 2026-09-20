import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1y7rt3td.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1y7rt3td"/>`,
		"fallback": "quill:stopwatch",
	});
}

export default Component;
