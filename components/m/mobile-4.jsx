import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1jix6p0z.css';
import '../../css/x/xw4xmi69j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="i1jix6p0z"/><path class="xw4xmi69j"/>`,
		"fallback": "circum:mobile-4",
	});
}

export default Component;
