import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt44b3btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt44b3btn"/>`,
		"fallback": "mingcute:umbrella-line",
	});
}

export default Component;
