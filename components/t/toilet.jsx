import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m42c9_cfw.css';
import '../../css/o/odnjp3bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m42c9_cfw"/><path class="odnjp3bok"/></g>`,
		"fallback": "lucide:toilet",
	});
}

export default Component;
