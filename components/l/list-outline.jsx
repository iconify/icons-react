import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/onx5i2vgi.css';
import '../../css/u/u0ms8pngb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="list-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="onx5i2vgi"/><path class="u0ms8pngb"/></g></g>`,
		"fallback": "cuida:list-outline",
	});
}

export default Component;
