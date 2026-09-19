import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftqefabbj.css';

const viewBox = {"width":490,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftqefabbj"/>`,
		"fallback": "file-icons:truffle",
	});
}

export default Component;
