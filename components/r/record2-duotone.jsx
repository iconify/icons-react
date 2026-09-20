import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kcdnshbbq.css';
import '../../css/m/m4adztdra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kcdnshbbq"/><path class="m4adztdra"/></g>`,
		"fallback": "reicon:record2-duotone",
	});
}

export default Component;
