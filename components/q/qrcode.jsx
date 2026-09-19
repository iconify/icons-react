import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4so6bc4g.css';
import '../../css/g/gv8vtmbew.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e4so6bc4g"/><path class="gv8vtmbew"/></g>`,
		"fallback": "heroicons-solid:qrcode",
	});
}

export default Component;
