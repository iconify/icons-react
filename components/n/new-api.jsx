import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pr4f-9s_n.css';
import '../../css/r/ra5ekzk-k.css';
import '../../css/d/dkikyne8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pr4f-9s_n"/><path class="ra5ekzk-k"/><path class="dkikyne8i"/></g>`,
		"fallback": "thesvg:new-api",
	});
}

export default Component;
