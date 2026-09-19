import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyr57ub8v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyr57ub8v"/>`,
		"fallback": "ep:magic-stick",
	});
}

export default Component;
