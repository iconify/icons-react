import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc9uxvm_i.css';
import '../../css/p/p-l7fnbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc9uxvm_i"/><path class="p-l7fnbaq"/></g>`,
		"fallback": "streamline-ultimate-color:signal-full",
	});
}

export default Component;
