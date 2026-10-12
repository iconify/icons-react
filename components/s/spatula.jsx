import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlx8oybov.css';
import '../../css/x/xs25p1wij.css';
import '../../css/w/wd_9ef92d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zlx8oybov"/><path class="xs25p1wij"/><path class="wd_9ef92d"/></g>`,
		"fallback": "andrsrxn:spatula",
	});
}

export default Component;
