import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmty8gb8e.css';
import '../../css/i/i-4bi2m3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gmty8gb8e"/><path class="i-4bi2m3y"/></g>`,
		"fallback": "healthicons:regular-patient",
	});
}

export default Component;
