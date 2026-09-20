import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qx-n-bc9y.css';
import '../../css/r/r58-gnbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qx-n-bc9y"/><path class="r58-gnbko"/></g>`,
		"fallback": "lucide:origami",
	});
}

export default Component;
