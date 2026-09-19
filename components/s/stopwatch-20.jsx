import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5g_57b6n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5g_57b6n"/>`,
		"fallback": "fa7-solid:stopwatch-20",
	});
}

export default Component;
