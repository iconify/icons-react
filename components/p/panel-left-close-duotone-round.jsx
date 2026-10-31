import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8xi8pkds.css';
import '../../css/e/e13czwlkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t8xi8pkds"/><path class="e13czwlkv"/></g>`,
		"fallback": "coolicons:panel-left-close-duotone-round",
	});
}

export default Component;
