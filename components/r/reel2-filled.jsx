import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t696edbxd.css';
import '../../css/b/bw3lcrbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t696edbxd"/><path clip-rule="evenodd" class="bw3lcrbfy"/></g>`,
		"fallback": "reicon:reel2-filled",
	});
}

export default Component;
