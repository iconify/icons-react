import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/znr3ebb-b.css';
import '../../css/i/ixa3g4gsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="znr3ebb-b"/><path class="ixa3g4gsj"/></g>`,
		"fallback": "keyline-icons:rocket-vertical-duotone",
	});
}

export default Component;
