import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/e45481izn.css';
import '../../css/h/h8gxm4bya.css';
import '../../css/z/zhz3nyihr.css';
import '../../css/y/y1887qbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="e45481izn"/><path clip-rule="evenodd" class="h8gxm4bya"/><path class="zhz3nyihr"/><path class="y1887qbbr"/></g>`,
		"fallback": "streamline-sharp-color:summit",
	});
}

export default Component;
