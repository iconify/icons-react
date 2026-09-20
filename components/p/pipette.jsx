import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lxor5fn6u.css';
import '../../css/e/em8znnbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lxor5fn6u"/><path class="em8znnbkt"/></g>`,
		"fallback": "lucide:pipette",
	});
}

export default Component;
