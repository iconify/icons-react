import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efw8ff3xu.css';
import '../../css/a/az4vgcc2z.css';
import '../../css/w/wvdhdnwxn.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efw8ff3xu"/><path class="az4vgcc2z"/><path class="wvdhdnwxn"/></g>`,
		"fallback": "devicon-plain:jasmine",
	});
}

export default Component;
