import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdw94qbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdw94qbiu"/>`,
		"fallback": "mingcute:newdot-fill",
	});
}

export default Component;
