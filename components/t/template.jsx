import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyq2racqf.css';
import '../../css/d/dvqecdcrk.css';
import '../../css/o/o9ld_ebbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eyq2racqf"/><rect transform="matrix(-1 0 0 1 9.84 2.76)" class="dvqecdcrk"/><path class="o9ld_ebbf"/></g>`,
		"fallback": "andrsrxn:template",
	});
}

export default Component;
