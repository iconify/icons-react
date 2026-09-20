import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7_hdonmj.css';
import '../../css/z/z6j86kbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7_hdonmj"/><path class="z6j86kbeg"/></g>`,
		"fallback": "si:play-next-duotone",
	});
}

export default Component;
