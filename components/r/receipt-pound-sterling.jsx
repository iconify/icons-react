import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5buu7h6r.css';
import '../../css/o/or83j__gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p5buu7h6r"/><path class="or83j__gr"/></g>`,
		"fallback": "lucide:receipt-pound-sterling",
	});
}

export default Component;
