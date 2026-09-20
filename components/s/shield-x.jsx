import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-jdtqbun.css';
import '../../css/d/dehs78hfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-jdtqbun"/><path clip-rule="evenodd" class="dehs78hfx"/></g>`,
		"fallback": "reicon:shield-x",
	});
}

export default Component;
