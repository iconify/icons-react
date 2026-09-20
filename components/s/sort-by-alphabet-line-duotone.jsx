import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2htckojk.css';
import '../../css/z/z5nkh5rsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e2htckojk"/><path class="z5nkh5rsk"/></g>`,
		"fallback": "solar:sort-by-alphabet-line-duotone",
	});
}

export default Component;
