import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0nm91b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0nm91b2q"/>`,
		"fallback": "gridicons:status",
	});
}

export default Component;
