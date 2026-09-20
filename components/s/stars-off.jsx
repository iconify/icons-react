import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_f9mwv7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_f9mwv7v"/>`,
		"fallback": "tabler:stars-off",
	});
}

export default Component;
