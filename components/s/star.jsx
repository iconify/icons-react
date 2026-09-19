import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boe3m2q7r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boe3m2q7r"/>`,
		"fallback": "ep:star",
	});
}

export default Component;
