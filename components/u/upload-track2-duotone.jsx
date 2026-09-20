import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jng60lbug.css';
import '../../css/c/clnjjcb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jng60lbug"/><path clip-rule="evenodd" class="clnjjcb9c"/></g>`,
		"fallback": "reicon:upload-track2-duotone",
	});
}

export default Component;
