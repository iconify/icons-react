import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riy76el_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="riy76el_i"/>`,
		"fallback": "coolicons:music-notes-duocolor-round",
	});
}

export default Component;
