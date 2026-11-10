import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf6-x9klf.css';
import '../../css/x/xv5op96ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gf6-x9klf"/><path class="xv5op96ri"/></g>`,
		"fallback": "andrsrxn:table-columns-wide",
	});
}

export default Component;
