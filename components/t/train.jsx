import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3ze4ub9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3ze4ub9p"/>`,
		"fallback": "fe:train",
	});
}

export default Component;
