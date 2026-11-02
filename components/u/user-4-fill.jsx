import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmxt5nb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmxt5nb-c"/>`,
		"fallback": "mingcute:user-4-fill",
	});
}

export default Component;
