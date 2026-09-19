import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6cqm3b0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6cqm3b0q"/>`,
		"fallback": "guidance:swimming-pool",
	});
}

export default Component;
