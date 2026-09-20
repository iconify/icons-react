import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoba4e2xk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoba4e2xk"/>`,
		"fallback": "teenyicons:scribble-outline",
	});
}

export default Component;
