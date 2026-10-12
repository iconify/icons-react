import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zihtko4od.css';
import '../../css/o/oalqs3ghm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zihtko4od"/><path class="oalqs3ghm"/>`,
		"fallback": "garden:rocket-stroke-20",
	});
}

export default Component;
