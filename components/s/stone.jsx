import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfgyg9btk.css';
import '../../css/b/bstqghbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cfgyg9btk"/><path class="bstqghbvc"/></g>`,
		"fallback": "lucide:stone",
	});
}

export default Component;
