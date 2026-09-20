import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5ndybfxb.css';
import '../../css/z/zknya8xqj.css';
import '../../css/u/un5eawvbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r5ndybfxb"/><path class="zknya8xqj"/><path clip-rule="evenodd" class="un5eawvbo"/></g>`,
		"fallback": "reicon:nightstand2-duotone",
	});
}

export default Component;
