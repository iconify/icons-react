import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd400g6hh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd400g6hh"/>`,
		"fallback": "fa7-solid:shield-halved",
	});
}

export default Component;
