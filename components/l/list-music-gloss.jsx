import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smwufls_s.css';
import '../../css/h/hhez0bc7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="smwufls_s wm-k"/><path class="hhez0bc7b wm-a"/></g>`,
		"fallback": "withicons:list-music-gloss",
	});
}

export default Component;
