import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdklsob8k.css';
import '../../css/o/o6zniyb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vdklsob8k"/><path class="o6zniyb9r"/></g>`,
		"fallback": "keyline-icons:package-duotone",
	});
}

export default Component;
