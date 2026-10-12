import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk2q7ibxg.css';
import '../../css/a/ar63qbcbl.css';
import '../../css/z/z9ft0sbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tk2q7ibxg"/><path class="ar63qbcbl"/><path class="z9ft0sbrs"/></g>`,
		"fallback": "andrsrxn:toilet",
	});
}

export default Component;
