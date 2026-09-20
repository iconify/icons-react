import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s3xsa2b9s.css';
import '../../css/h/hjteztbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s3xsa2b9s"/><path clip-rule="evenodd" class="hjteztbgo"/></g>`,
		"fallback": "reicon:library-filled",
	});
}

export default Component;
