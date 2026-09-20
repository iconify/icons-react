import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ggjo9cc-i.css';
import '../../css/y/yra35wc5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ggjo9cc-i"/><path class="yra35wc5h"/></g>`,
		"fallback": "reicon:laptop2-duotone",
	});
}

export default Component;
