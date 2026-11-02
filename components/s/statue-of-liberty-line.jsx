import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy2to3bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy2to3bbw"/>`,
		"fallback": "mingcute:statue-of-liberty-line",
	});
}

export default Component;
