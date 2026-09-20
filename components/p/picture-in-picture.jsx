import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/riq5beblh.css';
import '../../css/l/lf58bxbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="riq5beblh"/><rect class="lf58bxbvx"/></g>`,
		"fallback": "lucide:picture-in-picture",
	});
}

export default Component;
