import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0qd9kuvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0qd9kuvr"/>`,
		"fallback": "ri:tooth-fill",
	});
}

export default Component;
