import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1-koubcj.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1-koubcj"/>`,
		"fallback": "whh:plogger",
	});
}

export default Component;
