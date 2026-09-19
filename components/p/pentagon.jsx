import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft4g341fe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft4g341fe"/>`,
		"fallback": "fa7-solid:pentagon",
	});
}

export default Component;
