import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4tymacwu.css';
import '../../css/u/ujsp5sb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u4tymacwu"/><circle class="ujsp5sb0k"/></g>`,
		"fallback": "lucide:key-round",
	});
}

export default Component;
