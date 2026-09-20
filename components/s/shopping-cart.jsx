import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/asuw0vbpc.css';
import '../../css/e/ekaoqnb1l.css';
import '../../css/o/o74a4ibec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="asuw0vbpc"/><path class="ekaoqnb1l"/><path class="o74a4ibec"/></g>`,
		"fallback": "tabler:shopping-cart",
	});
}

export default Component;
