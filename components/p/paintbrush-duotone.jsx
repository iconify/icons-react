import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oxwqf1bzb.css';
import '../../css/d/dq_dh4nsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="oxwqf1bzb"/><path class="dq_dh4nsl"/></g>`,
		"fallback": "keyline-icons:paintbrush-duotone",
	});
}

export default Component;
