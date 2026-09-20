import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlm2owbdg.css';
import '../../css/g/gwwbnwbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jlm2owbdg"/><path class="gwwbnwbbg"/></g>`,
		"fallback": "reicon:reel-duotone",
	});
}

export default Component;
