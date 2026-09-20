import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7wx12b7n.css';
import '../../css/x/xzaym_11j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z7wx12b7n"/><path class="xzaym_11j"/></g>`,
		"fallback": "si:view-compact-duotone",
	});
}

export default Component;
