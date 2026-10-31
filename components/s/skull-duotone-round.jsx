import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m364sthdp.css';
import '../../css/p/p6ocu1kfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m364sthdp"/><path class="p6ocu1kfr"/></g>`,
		"fallback": "coolicons:skull-duotone-round",
	});
}

export default Component;
