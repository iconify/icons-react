import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2psm5bby.css';
import '../../css/r/r4ymfxbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r2psm5bby"/><path class="r4ymfxbcb wm-a"/></g>`,
		"fallback": "withicons:text-cursor-input-solid",
	});
}

export default Component;
