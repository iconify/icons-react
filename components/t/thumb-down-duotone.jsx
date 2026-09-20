import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ektfgywpe.css';
import '../../css/m/m2s8bm-pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ektfgywpe"/><path class="m2s8bm-pp"/></g>`,
		"fallback": "si:thumb-down-duotone",
	});
}

export default Component;
