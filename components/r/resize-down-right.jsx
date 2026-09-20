import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
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
		"content": `<g class="flen3tbdj"><path class="cejwj-bns"/><path class="fc-lmubvm"/></g>`,
		"fallback": "lets-icons:resize-down-right",
	});
}

export default Component;
