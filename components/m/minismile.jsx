import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7v6ehbqe.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7v6ehbqe"/>`,
		"fallback": "whh:minismile",
	});
}

export default Component;
