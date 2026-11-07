import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k66ipdb2y.css';
import '../../css/u/u806m8xap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k66ipdb2y"/><path class="u806m8xap"/>`,
		"fallback": "solar:stopwatch-pause-bold",
	});
}

export default Component;
