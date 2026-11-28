import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um8-7ue6u.css';
import '../../css/t/tbhz8eoif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary um8-7ue6u"/><path class="primary tbhz8eoif"/></g>`,
		"fallback": "iconaut:tags-duotone",
	});
}

export default Component;
