import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-ryz0bgv.css';
import '../../css/h/hsarnmb2i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y-ryz0bgv"/><path clip-rule="evenodd" class="hsarnmb2i"/></g>`,
		"fallback": "healthicons:tissue-outline",
	});
}

export default Component;
