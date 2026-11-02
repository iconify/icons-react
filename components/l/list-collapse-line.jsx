import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abdmc1bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abdmc1bgi"/>`,
		"fallback": "mingcute:list-collapse-line",
	});
}

export default Component;
