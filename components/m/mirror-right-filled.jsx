import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nz-gl565b.css';
import '../../css/a/aidxrsbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nz-gl565b"/><path class="aidxrsbup"/></g>`,
		"fallback": "reicon:mirror-right-filled",
	});
}

export default Component;
