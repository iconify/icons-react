import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wljewpjoe.css';
import '../../css/x/x2gu2vr4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wljewpjoe"/><path class="x2gu2vr4d"/>`,
		"fallback": "boxicons:paint-roll-filled",
	});
}

export default Component;
