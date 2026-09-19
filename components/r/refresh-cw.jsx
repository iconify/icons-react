import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xx9l5-b3t.css';
import '../../css/e/epxcuqb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xx9l5-b3t"/><path class="epxcuqb1w"/></g>`,
		"fallback": "feather:refresh-cw",
	});
}

export default Component;
