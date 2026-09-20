import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eayipj5ml.css';
import '../../css/s/sgz67zbcf.css';
import '../../css/c/czb17zbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="eayipj5ml"/><path class="sgz67zbcf"/><circle class="czb17zbdq"/></g>`,
		"fallback": "lets-icons:pin-alt-light",
	});
}

export default Component;
