import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6ddfqney.css';
import '../../css/z/z-0v18bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="j6ddfqney"/><path class="z-0v18bpk"/></g>`,
		"fallback": "keyline-icons:package-arrow-left-fill",
	});
}

export default Component;
