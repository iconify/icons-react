import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-he1cpls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-he1cpls"/>`,
		"fallback": "mingcute:parachute-fill",
	});
}

export default Component;
