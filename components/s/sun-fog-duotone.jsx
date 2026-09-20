import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlg72_z5p.css';
import '../../css/v/vww0m4bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jlg72_z5p"/><path class="vww0m4bym"/></g>`,
		"fallback": "reicon:sun-fog-duotone",
	});
}

export default Component;
