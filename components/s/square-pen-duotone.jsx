import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zp531bggp.css';
import '../../css/u/ugvjznb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zp531bggp"/><path class="ugvjznb6m"/></g>`,
		"fallback": "keyline-icons:square-pen-duotone",
	});
}

export default Component;
