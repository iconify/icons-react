import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twame7b2s.css';
import '../../css/b/bwvqdxb3p.css';
import '../../css/c/c7hyj6bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="twame7b2s"/><path class="bwvqdxb3p"/><path clip-rule="evenodd" class="c7hyj6bec"/></g>`,
		"fallback": "reicon:user-x",
	});
}

export default Component;
