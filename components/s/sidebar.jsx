import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tpg6r9b2i.css';
import '../../css/t/th3828bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tpg6r9b2i"/><path clip-rule="evenodd" class="th3828bzm"/></g>`,
		"fallback": "reicon:sidebar",
	});
}

export default Component;
