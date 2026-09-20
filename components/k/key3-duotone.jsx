import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8lot2a3s.css';
import '../../css/j/jl00-wq7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b8lot2a3s"/><path class="jl00-wq7i"/></g>`,
		"fallback": "reicon:key3-duotone",
	});
}

export default Component;
