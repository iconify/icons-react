import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1bdebg5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1bdebg5d"/>`,
		"fallback": "tabler:math-x-divide-2",
	});
}

export default Component;
