import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdsn85ysj.css';
import '../../css/x/xk4xuvuka.css';
import '../../css/x/xfngl4bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdsn85ysj"/><path class="xk4xuvuka"/><path class="xfngl4bbv"/>`,
		"fallback": "eva:radio-outline",
	});
}

export default Component;
