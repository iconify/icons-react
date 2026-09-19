import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-51zibyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-51zibyj"/>`,
		"fallback": "bx:objects-horizontal-center",
	});
}

export default Component;
