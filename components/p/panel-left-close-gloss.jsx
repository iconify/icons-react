import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v1jlkd44n.css';
import '../../css/e/eunqjebzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v1jlkd44n wm-k"/><path class="eunqjebzp wm-a"/></g>`,
		"fallback": "withicons:panel-left-close-gloss",
	});
}

export default Component;
