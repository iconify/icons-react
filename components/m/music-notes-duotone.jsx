import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c182t4n4t.css';
import '../../css/v/v039wubbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c182t4n4t"/><path class="v039wubbd"/></g>`,
		"fallback": "reicon:music-notes-duotone",
	});
}

export default Component;
