import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozzv6mtrh.css';
import '../../css/y/y7qsxqb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozzv6mtrh"/><path class="y7qsxqb_z"/></g>`,
		"fallback": "coolicons:package-upload-bulk-round",
	});
}

export default Component;
