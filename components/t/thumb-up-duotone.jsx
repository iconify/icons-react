import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djl_9-bta.css';
import '../../css/k/kg3w2bste.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djl_9-bta"/><path class="kg3w2bste"/></g>`,
		"fallback": "si:thumb-up-duotone",
	});
}

export default Component;
