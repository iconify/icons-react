import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/if838_bko.css';
import '../../css/z/z59g61bbc.css';
import '../../css/l/l788tm9oc.css';
import '../../css/j/jhb5hjq3f.css';
import '../../css/t/twhx2sbps.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="if838_bko"/><path clip-rule="evenodd" class="z59g61bbc"/><path clip-rule="evenodd" class="l788tm9oc"/><path clip-rule="evenodd" class="jhb5hjq3f"/><path clip-rule="evenodd" class="twhx2sbps"/></g>`,
		"fallback": "pepicons-print:leave",
	});
}

export default Component;
