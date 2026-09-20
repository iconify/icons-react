import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8s82qb2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8s82qb2c"/>`,
		"fallback": "subway:join-corner-arrow-1",
	});
}

export default Component;
