import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6ddfqney.css';
import '../../css/l/ldkpvmh9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="j6ddfqney"/><path class="ldkpvmh9h"/></g>`,
		"fallback": "keyline-icons:package-plus-fill",
	});
}

export default Component;
