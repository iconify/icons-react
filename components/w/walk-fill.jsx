import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxxshtzvx.css';
import '../../css/m/mojdq78pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxxshtzvx"/><path class="mojdq78pj"/>`,
		"fallback": "mingcute:walk-fill",
	});
}

export default Component;
