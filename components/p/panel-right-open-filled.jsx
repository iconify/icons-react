import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j05dnx8-k.css';
import '../../css/g/gd96rubht.css';
import '../../css/l/lun04nb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j05dnx8-k"/><path class="gd96rubht"/><path class="lun04nb-r"/></g>`,
		"fallback": "andrsrxn:panel-right-open-filled",
	});
}

export default Component;
