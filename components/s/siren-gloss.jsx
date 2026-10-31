import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/skue08b8m.css';
import '../../css/x/x3mbdo00s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="skue08b8m wm-k"/><path class="wm-s x3mbdo00s"/></g>`,
		"fallback": "withicons:siren-gloss",
	});
}

export default Component;
