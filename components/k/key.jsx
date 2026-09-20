import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqn6cgq8b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqn6cgq8b"/>`,
		"fallback": "simple-line-icons:key",
	});
}

export default Component;
