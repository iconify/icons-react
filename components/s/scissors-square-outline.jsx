import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m6x3ejfie.css';
import '../../css/z/z78wsfx6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m6x3ejfie"/><path class="z78wsfx6v"/></g>`,
		"fallback": "solar:scissors-square-outline",
	});
}

export default Component;
