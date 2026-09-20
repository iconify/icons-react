import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/cejwj-bns.css';
import '../../css/f/fc-lmubvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="cejwj-bns"/><path class="fc-lmubvm"/></g>`,
		"fallback": "lets-icons:resize-down-right-light",
	});
}

export default Component;
