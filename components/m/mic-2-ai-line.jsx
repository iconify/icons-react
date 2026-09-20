import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3___g9xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3___g9xk"/>`,
		"fallback": "ri:mic-2-ai-line",
	});
}

export default Component;
