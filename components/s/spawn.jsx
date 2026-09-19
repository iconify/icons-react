import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlwy_6z1q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlwy_6z1q"/>`,
		"fallback": "whh:spawn",
	});
}

export default Component;
