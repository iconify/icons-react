import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8br9cg5d.css';
import '../../css/g/gip_tyhye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8br9cg5d"/><path class="gip_tyhye"/></g>`,
		"fallback": "andrsrxn:sd-card-x",
	});
}

export default Component;
