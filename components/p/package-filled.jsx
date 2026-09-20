import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs8q6vzba.css';
import '../../css/t/titah6d3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fs8q6vzba"/><path clip-rule="evenodd" class="titah6d3f"/></g>`,
		"fallback": "reicon:package-filled",
	});
}

export default Component;
