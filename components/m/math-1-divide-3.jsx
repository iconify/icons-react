import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hklz5bu9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hklz5bu9z"/>`,
		"fallback": "tabler:math-1-divide-3",
	});
}

export default Component;
