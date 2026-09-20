import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6_jxd13h.css';
import '../../css/g/go5f32bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l6_jxd13h"/><path class="go5f32bpg"/></g>`,
		"fallback": "reicon:thumbs-up-filled",
	});
}

export default Component;
