import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwkxpf20w.css';
import '../../css/w/wmcsn-edy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mwkxpf20w"/><path class="wmcsn-edy"/></g>`,
		"fallback": "akar-icons:shopping-bag",
	});
}

export default Component;
