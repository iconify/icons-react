import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqi00l9tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqi00l9tb"/>`,
		"fallback": "mingcute:user-1-fill",
	});
}

export default Component;
