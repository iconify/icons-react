import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lozqnbb4x.css';
import '../../css/j/jz6wz8b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lozqnbb4x"/><path class="jz6wz8b0v"/></g>`,
		"fallback": "coolicons:vault-duotone-round",
	});
}

export default Component;
