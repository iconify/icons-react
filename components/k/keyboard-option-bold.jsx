import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwi52woow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwi52woow"/>`,
		"fallback": "streamline-ultimate:keyboard-option-bold",
	});
}

export default Component;
