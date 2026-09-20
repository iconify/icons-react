import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nu79aibse.css';
import '../../css/y/yjfo42_6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nu79aibse"/><path class="yjfo42_6x"/></g>`,
		"fallback": "keyline-icons:sunrise-duotone",
	});
}

export default Component;
