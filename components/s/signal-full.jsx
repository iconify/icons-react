import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ah_qz-bsp.css';
import '../../css/s/s43axub5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ah_qz-bsp"/><path class="s43axub5d"/></g>`,
		"fallback": "andrsrxn:signal-full",
	});
}

export default Component;
