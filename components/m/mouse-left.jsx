import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7yhkcngl.css';
import '../../css/a/at9-cgbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x7yhkcngl"/><circle class="at9-cgbfo"/></g>`,
		"fallback": "lucide:mouse-left",
	});
}

export default Component;
