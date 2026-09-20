import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pbf19-_-r.css';
import '../../css/e/ev9ue5h4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pbf19-_-r"/><path clip-rule="evenodd" class="ev9ue5h4i"/></g>`,
		"fallback": "keyline-icons:toggles-duotone",
	});
}

export default Component;
