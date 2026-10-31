import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/py_z87bnd.css';
import '../../css/a/ab0twwb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="py_z87bnd"/><path class="ab0twwb_u"/></g>`,
		"fallback": "coolicons:tree-duotone-round",
	});
}

export default Component;
