import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rasm6zbso.css';
import '../../css/q/q6vgegxrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rasm6zbso wm-k"/><path class="q6vgegxrm wm-a"/></g>`,
		"fallback": "withicons:target-gloss",
	});
}

export default Component;
