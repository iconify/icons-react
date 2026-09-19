import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nf7_3bc0d.css';
import '../../css/z/z5y5lebfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nf7_3bc0d"/><path class="z5y5lebfk"/></g>`,
		"fallback": "iconoir:presentation-solid",
	});
}

export default Component;
