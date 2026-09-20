import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fw02yrbyd.css';
import '../../css/h/hm730bcel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fw02yrbyd"/><path class="hm730bcel"/></g>`,
		"fallback": "keyline-icons:tree-palm-duotone",
	});
}

export default Component;
