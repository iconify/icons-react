import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ujy0l2b2e.css';
import '../../css/h/hui8lvb1c.css';
import '../../css/i/ifzbg_-en.css';
import '../../css/b/bou945bat.css';
import '../../css/h/hqlqb8bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ujy0l2b2e wm-k"/><path class="hui8lvb1c wm-a"/><path class="ifzbg_-en wm-shadow"/><path class="bou945bat wm-k"/><path class="hqlqb8bfm wm-a"/></g>`,
		"fallback": "withicons:trees-engrave",
	});
}

export default Component;
