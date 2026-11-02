import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk7gl_bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk7gl_bjb"/>`,
		"fallback": "mingcute:polygon-line",
	});
}

export default Component;
