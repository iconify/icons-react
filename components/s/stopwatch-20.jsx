import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr6a2-c4s.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr6a2-c4s"/>`,
		"fallback": "fa6-solid:stopwatch-20",
	});
}

export default Component;
