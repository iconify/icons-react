import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/csm16okln.css';
import '../../css/e/eqhrrcbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="csm16okln"/><path class="eqhrrcbef"/></g>`,
		"fallback": "keyline-icons:podium-3-duotone",
	});
}

export default Component;
