import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkapuhbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkapuhbwb"/>`,
		"fallback": "majesticons:text-align-left-line",
	});
}

export default Component;
