import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uhsid9cdk.css';
import '../../css/i/ijoxvcc3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uhsid9cdk"/><path class="ijoxvcc3b"/></g>`,
		"fallback": "solar:play-stream-bold",
	});
}

export default Component;
