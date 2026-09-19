import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glbu6gb9k.css';
import '../../css/x/x-vljeb0p.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glbu6gb9k"/><path class="x-vljeb0p"/>`,
		"fallback": "flag:kg-4x3",
	});
}

export default Component;
