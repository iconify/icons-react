import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rf-7-1b0w.css';
import '../../css/n/nnm6p5p2j.css';
import '../../css/i/ierjdexox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rf-7-1b0w"/><path class="nnm6p5p2j"/><path class="ierjdexox"/></g>`,
		"fallback": "si:ticket-duotone",
	});
}

export default Component;
