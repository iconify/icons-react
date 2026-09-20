import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ia83r8b0k.css';
import '../../css/n/nzxl1cc9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ia83r8b0k"/><path class="nzxl1cc9w"/></g>`,
		"fallback": "reicon:suitcase",
	});
}

export default Component;
