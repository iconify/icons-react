import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/p/p9jpapbpu.css';
import '../../css/l/lih_y0b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="p9jpapbpu"/><path class="lih_y0b5z"/></g>`,
		"fallback": "tabler:shopping-cart-bolt",
	});
}

export default Component;
