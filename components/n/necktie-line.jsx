import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll6q45bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll6q45bla"/>`,
		"fallback": "mingcute:necktie-line",
	});
}

export default Component;
