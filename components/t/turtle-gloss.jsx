import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vlnc4gmyf.css';
import '../../css/v/vtlgm4a0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vlnc4gmyf wm-k"/><path class="vtlgm4a0h wm-a"/></g>`,
		"fallback": "withicons:turtle-gloss",
	});
}

export default Component;
