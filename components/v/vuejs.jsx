import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj988qb7e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj988qb7e"/>`,
		"fallback": "fa-brands:vuejs",
	});
}

export default Component;
