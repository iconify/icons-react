import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5fc0wbyx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5fc0wbyx"/>`,
		"fallback": "ep:ship",
	});
}

export default Component;
