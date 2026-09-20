import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4t58_bxy.css';
import '../../css/x/x5rv4lbte.css';
import '../../css/b/b3mln6qlf.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4t58_bxy"/><path class="x5rv4lbte"/><path clip-rule="evenodd" class="b3mln6qlf"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:trash-circle",
	});
}

export default Component;
