import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4vhe452q.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4vhe452q"/>`,
		"fallback": "jam:rocket-f",
	});
}

export default Component;
