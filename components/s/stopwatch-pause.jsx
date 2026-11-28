import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck4cn5b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck4cn5b6p"/>`,
		"fallback": "noviair:stopwatch-pause",
	});
}

export default Component;
