import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm0g4b99a.css';
import '../../css/e/e12r68bme.css';
import '../../css/z/zhmxno9se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hm0g4b99a"/><path class="e12r68bme"/><path class="zhmxno9se"/></g>`,
		"fallback": "solar:printer-2-bold",
	});
}

export default Component;
