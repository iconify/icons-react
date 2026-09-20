import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjp-8rwdv.css';
import '../../css/l/lhko3ubcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kjp-8rwdv"/><path class="lhko3ubcv"/></g>`,
		"fallback": "si:pin-duotone",
	});
}

export default Component;
