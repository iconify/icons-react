import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-7w5gbig.css';
import '../../css/y/y1hb6nbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-7w5gbig"/><path class="y1hb6nbsi"/>`,
		"fallback": "boxicons:mosque-filled",
	});
}

export default Component;
