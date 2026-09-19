import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtqa6xbcw.css';
import '../../css/v/v1_kdgbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qtqa6xbcw"/><path clip-rule="evenodd" class="v1_kdgbjs"/></g>`,
		"fallback": "healthicons:skull-outline-24px",
	});
}

export default Component;
