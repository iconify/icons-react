import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8jnvebsw.css';
import '../../css/o/ovezwuubp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j8jnvebsw"/><path class="ovezwuubp"/></g>`,
		"fallback": "reicon:play-stream-duotone",
	});
}

export default Component;
