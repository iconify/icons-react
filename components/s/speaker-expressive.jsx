import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ageb62bvz.css';
import '../../css/l/ln6v62bgu.css';
import '../../css/c/ccq8bbb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ageb62bvz"/><path class="ln6v62bgu"/><path clip-rule="evenodd" class="ccq8bbb3s"/></g>`,
		"fallback": "nrk:speaker-expressive",
	});
}

export default Component;
