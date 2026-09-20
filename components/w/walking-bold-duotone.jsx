import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkweptp2s.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/a/a0p-cgb0r.css';
import '../../css/j/jw4a19nsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zkweptp2s"/><g class="mc2zb0bvp"><path class="a0p-cgb0r"/><path class="jw4a19nsd"/></g></g>`,
		"fallback": "solar:walking-bold-duotone",
	});
}

export default Component;
