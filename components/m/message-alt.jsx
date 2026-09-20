import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gh_z2-bhx.css';
import '../../css/l/lp5zebcnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="gh_z2-bhx"/><path class="lp5zebcnh"/></g>`,
		"fallback": "lets-icons:message-alt",
	});
}

export default Component;
