import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgv33zbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgv33zbgo"/>`,
		"fallback": "mingcute:snowstorm-line",
	});
}

export default Component;
