import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy2b_qbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy2b_qbqy"/>`,
		"fallback": "coolicons:note-check-corner-fill-round",
	});
}

export default Component;
