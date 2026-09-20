import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qrdwenu5p.css';
import '../../css/f/f536ghksd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qrdwenu5p"/><path class="f536ghksd"/></g>`,
		"fallback": "tabler:mood-cry",
	});
}

export default Component;
