import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg71r1byf.css';
import '../../css/a/ajf_7ldit.css';
import '../../css/n/npr0pslmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gg71r1byf"/><path class="ajf_7ldit"/><path clip-rule="evenodd" class="npr0pslmk"/></g>`,
		"fallback": "reicon:pen-nib2-filled",
	});
}

export default Component;
