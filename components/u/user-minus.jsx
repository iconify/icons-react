import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_-xp_znr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_-xp_znr"/>`,
		"fallback": "ci:user-minus",
	});
}

export default Component;
