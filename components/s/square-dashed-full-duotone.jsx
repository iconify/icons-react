import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umern85ks.css';
import '../../css/g/gtsg3ccob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="umern85ks"/><path class="gtsg3ccob"/></g>`,
		"fallback": "keyline-icons:square-dashed-full-duotone",
	});
}

export default Component;
