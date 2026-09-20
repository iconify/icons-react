import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm3h6bb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm3h6bb1c"/>`,
		"fallback": "ri:skip-back-mini-line",
	});
}

export default Component;
