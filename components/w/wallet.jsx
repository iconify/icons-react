import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z83o-6b1o.css';
import '../../css/f/f-3wt_1nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z83o-6b1o"/><path class="f-3wt_1nk"/></g>`,
		"fallback": "lucide:wallet",
	});
}

export default Component;
