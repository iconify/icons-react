import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvnyqw4kk.css';
import '../../css/h/hqu6vb2iv.css';
import '../../css/i/ii0i11bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dvnyqw4kk"/><path clip-rule="evenodd" class="hqu6vb2iv"/><path class="ii0i11bvp"/></g>`,
		"fallback": "flowbite:school-lock-solid",
	});
}

export default Component;
