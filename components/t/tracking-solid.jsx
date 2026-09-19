import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eg7hghbbf.css';
import '../../css/e/e2vap309i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eg7hghbbf"/><path class="e2vap309i"/></g>`,
		"fallback": "flowbite:tracking-solid",
	});
}

export default Component;
