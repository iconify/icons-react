import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bamstgp1n.css';
import '../../css/u/u96oxx35p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bamstgp1n"/><path clip-rule="evenodd" class="u96oxx35p"/></g>`,
		"fallback": "reicon:speaker-filled",
	});
}

export default Component;
