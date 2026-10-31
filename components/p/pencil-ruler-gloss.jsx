import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cbs_iv3-v.css';
import '../../css/x/xp8jk5b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cbs_iv3-v wm-k"/><path class="wm-a xp8jk5b2k"/></g>`,
		"fallback": "withicons:pencil-ruler-gloss",
	});
}

export default Component;
