import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c47y40d3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c47y40d3q"/>`,
		"fallback": "cbi:tesla-fart",
	});
}

export default Component;
