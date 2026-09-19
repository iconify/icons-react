import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wktbs6b3w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wktbs6b3w"/>`,
		"fallback": "icons8:todo-list",
	});
}

export default Component;
