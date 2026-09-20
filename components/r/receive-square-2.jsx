import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8325nv0r.css';
import '../../css/k/kuka9vbtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8325nv0r"/><path clip-rule="evenodd" class="kuka9vbtd"/></g>`,
		"fallback": "reicon:receive-square-2",
	});
}

export default Component;
