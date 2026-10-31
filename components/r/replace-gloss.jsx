import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lfckavbyo.css';
import '../../css/v/v38vgmbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lfckavbyo wm-k"/><path class="v38vgmbks wm-a"/></g>`,
		"fallback": "withicons:replace-gloss",
	});
}

export default Component;
