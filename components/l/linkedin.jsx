import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8782qb6m.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8782qb6m"/>`,
		"fallback": "el:linkedin",
	});
}

export default Component;
