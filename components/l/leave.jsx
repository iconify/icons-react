import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/n/nvxt-ibae.css';
import '../../css/j/jdhap-rxc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path clip-rule="evenodd" class="nvxt-ibae"/><path class="jdhap-rxc"/></g>`,
		"fallback": "pepicons:leave",
	});
}

export default Component;
