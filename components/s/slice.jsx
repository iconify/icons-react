import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/ssno5c6fi.css';
import '../../css/u/ubdvaebyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ssno5c6fi"/><path class="ubdvaebyu"/></g>`,
		"fallback": "akar-icons:slice",
	});
}

export default Component;
