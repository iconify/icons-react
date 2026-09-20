import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cl8y40hiq.css';
import '../../css/v/vnsug9b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cl8y40hiq"/><path class="vnsug9b4z"/></g>`,
		"fallback": "nrk:rectangle-contract",
	});
}

export default Component;
