import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doos-3v8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doos-3v8q"/>`,
		"fallback": "mingcute:question-2-line",
	});
}

export default Component;
