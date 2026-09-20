import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dp52pcgzw.css';
import '../../css/p/pnhik0--j.css';
import '../../css/a/ahniufnyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dp52pcgzw"/><path class="pnhik0--j"/><path clip-rule="evenodd" class="ahniufnyv"/></g>`,
		"fallback": "reicon:sticker-smile3-filled",
	});
}

export default Component;
