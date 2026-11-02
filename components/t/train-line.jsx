import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjwgobc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjwgobc7i"/>`,
		"fallback": "mingcute:train-line",
	});
}

export default Component;
