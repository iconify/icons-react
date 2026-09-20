import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj3q2nb3r.css';
import '../../css/r/r1tosw77r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sj3q2nb3r"/><path class="r1tosw77r"/></g>`,
		"fallback": "keyline-icons:mail-check-fill",
	});
}

export default Component;
