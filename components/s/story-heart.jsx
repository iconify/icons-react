import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vm580uxoy.css';
import '../../css/a/a11gbwb4z.css';
import '../../css/x/xih9gqb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vm580uxoy"/><path class="a11gbwb4z"/><path class="xih9gqb4a"/></g>`,
		"fallback": "andrsrxn:story-heart",
	});
}

export default Component;
