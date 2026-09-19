import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv2u20usj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv2u20usj"/>`,
		"fallback": "fa7-solid:stopwatch",
	});
}

export default Component;
