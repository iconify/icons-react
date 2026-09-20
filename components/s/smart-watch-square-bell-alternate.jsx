import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cd_cu65rn.css';
import '../../css/e/ekm_zwjkh.css';
import '../../css/c/c8f-3kbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cd_cu65rn"/><path class="ekm_zwjkh"/><path class="c8f-3kbuu"/></g>`,
		"fallback": "streamline-freehand:smart-watch-square-bell-alternate",
	});
}

export default Component;
