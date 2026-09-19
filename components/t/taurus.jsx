import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hle26cumo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hle26cumo"/>`,
		"fallback": "fa7-solid:taurus",
	});
}

export default Component;
