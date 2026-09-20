import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdy72zbtq.css';
import '../../css/a/azm2qsb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdy72zbtq"/><path class="azm2qsb_s"/></g>`,
		"fallback": "pixelarticons:skull-sharp",
	});
}

export default Component;
