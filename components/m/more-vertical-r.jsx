import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qw74mi5an.css';
import '../../css/v/v-r4hnuqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qw74mi5an"/><path clip-rule="evenodd" class="v-r4hnuqg"/></g>`,
		"fallback": "gg:more-vertical-r",
	});
}

export default Component;
