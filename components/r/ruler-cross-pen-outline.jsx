import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oczur9ban.css';
import '../../css/m/m-28lt3-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oczur9ban"/><path class="m-28lt3-z"/></g>`,
		"fallback": "solar:ruler-cross-pen-outline",
	});
}

export default Component;
