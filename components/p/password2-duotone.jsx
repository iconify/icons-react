import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6spjyo4m.css';
import '../../css/h/huw5c0bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i6spjyo4m"/><path class="huw5c0bxw"/></g>`,
		"fallback": "reicon:password2-duotone",
	});
}

export default Component;
