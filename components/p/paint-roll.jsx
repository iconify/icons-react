import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk57u1bly.css';
import '../../css/x/x2gu2vr4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk57u1bly"/><path class="x2gu2vr4d"/>`,
		"fallback": "boxicons:paint-roll",
	});
}

export default Component;
