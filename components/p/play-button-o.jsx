import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9_ih2c8s.css';
import '../../css/c/cu6hvibqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b9_ih2c8s"/><path class="cu6hvibqq"/></g>`,
		"fallback": "gg:play-button-o",
	});
}

export default Component;
