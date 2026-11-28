import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jemga0b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jemga0b0d"/>`,
		"fallback": "iconaut:star-off-solid",
	});
}

export default Component;
