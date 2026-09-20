import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6mjbdbni.css';
import '../../css/p/pfe_5gb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6mjbdbni"/><path class="pfe_5gb-a"/></g>`,
		"fallback": "reicon:note-favorite-filled",
	});
}

export default Component;
