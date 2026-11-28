import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwl5-qb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwl5-qb1i"/>`,
		"fallback": "noviair:sim-card-x",
	});
}

export default Component;
