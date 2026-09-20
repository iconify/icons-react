import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gi_rbab8v.css';
import '../../css/o/owciiebyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gi_rbab8v"/><path class="owciiebyc"/></g>`,
		"fallback": "keyline-icons:repeat-1-duotone",
	});
}

export default Component;
