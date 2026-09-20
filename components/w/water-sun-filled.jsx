import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ippiyfbxa.css';
import '../../css/f/fn34yvb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ippiyfbxa"/><path class="fn34yvb4k"/></g>`,
		"fallback": "reicon:water-sun-filled",
	});
}

export default Component;
