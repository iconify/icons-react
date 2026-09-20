import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7f4dy54e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7f4dy54e"/>`,
		"fallback": "ix:monitor",
	});
}

export default Component;
