import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9z6su1jp.css';
import '../../css/u/u1a7mmhai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9z6su1jp"/><path class="u1a7mmhai"/></g>`,
		"fallback": "si:star-alt-duotone",
	});
}

export default Component;
