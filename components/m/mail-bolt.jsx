import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o1--y-0bb.css';
import '../../css/t/tawj0nkcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o1--y-0bb"/><path class="tawj0nkcj"/></g>`,
		"fallback": "tabler:mail-bolt",
	});
}

export default Component;
