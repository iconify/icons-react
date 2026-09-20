import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xzntu9doz.css';
import '../../css/e/e12r68bme.css';
import '../../css/g/gn31iacux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xzntu9doz"/><path class="e12r68bme"/><path clip-rule="evenodd" class="gn31iacux"/></g>`,
		"fallback": "solar:printer-bold",
	});
}

export default Component;
