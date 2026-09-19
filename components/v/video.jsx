import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5_qsukyp.css';
import '../../css/f/fi71x7bwr.css';

const viewBox = {"width":37,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r5_qsukyp"/><path class="fi71x7bwr"/></g>`,
		"fallback": "et:video",
	});
}

export default Component;
