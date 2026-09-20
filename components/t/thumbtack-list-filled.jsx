import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pw9cfbbav.css';
import '../../css/p/p1dkmfbom.css';
import '../../css/g/gh1dxtbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pw9cfbbav"/><path class="p1dkmfbom"/><path clip-rule="evenodd" class="gh1dxtbmo"/></g>`,
		"fallback": "reicon:thumbtack-list-filled",
	});
}

export default Component;
