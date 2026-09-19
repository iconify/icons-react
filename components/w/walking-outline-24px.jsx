import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v0be0wvtn.css';
import '../../css/r/rorb54b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v0be0wvtn"/><path class="rorb54b7x"/></g>`,
		"fallback": "healthicons:walking-outline-24px",
	});
}

export default Component;
