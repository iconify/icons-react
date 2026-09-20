import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y479ucc5d.css';
import '../../css/e/ei6majb8s.css';
import '../../css/o/odh5eyb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y479ucc5d"/><path class="ei6majb8s"/><path clip-rule="evenodd" class="odh5eyb1n"/></g>`,
		"fallback": "reicon:upload-track2-filled",
	});
}

export default Component;
