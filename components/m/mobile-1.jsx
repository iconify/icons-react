import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhadlj53g.css';
import '../../css/d/dake0_b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhadlj53g"/><path class="dake0_b6v"/>`,
		"fallback": "circum:mobile-1",
	});
}

export default Component;
