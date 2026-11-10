import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/he2jp2bcu.css';
import '../../css/b/btp4fqb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="he2jp2bcu"/><path class="btp4fqb5x"/></g>`,
		"fallback": "andrsrxn:terminal-square-dashed",
	});
}

export default Component;
