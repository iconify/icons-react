import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epdrjmb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epdrjmb_q"/>`,
		"fallback": "guidance:time",
	});
}

export default Component;
