import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wywvh72kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wywvh72kj"/>`,
		"fallback": "tabler:math-function-off",
	});
}

export default Component;
