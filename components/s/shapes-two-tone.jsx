import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2x15krep.css';
import '../../css/f/f3obpt_ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a2x15krep"/><path class="f3obpt_ka"/></g>`,
		"fallback": "keyline-icons:shapes-two-tone",
	});
}

export default Component;
