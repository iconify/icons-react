import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqq9qe5dd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqq9qe5dd"/>`,
		"fallback": "coolicons:music-note-off-round",
	});
}

export default Component;
