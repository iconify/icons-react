import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmkr0povj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmkr0povj"/>`,
		"fallback": "uil:plane-departure",
	});
}

export default Component;
