import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyj6wgmgt.css';
import '../../css/k/kvd67qbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyj6wgmgt"/><path class="kvd67qbql"/></g>`,
		"fallback": "andrsrxn:slash-square",
	});
}

export default Component;
