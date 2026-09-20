import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hxqguwbll.css';
import '../../css/h/hyy3y-bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hxqguwbll"/><path class="hyy3y-bzy"/></g>`,
		"fallback": "solar:settings-minimalistic-outline",
	});
}

export default Component;
