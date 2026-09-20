import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0sdswnkf.css';
import '../../css/e/ei9pf3_7b.css';
import '../../css/w/we2wcpp0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0sdswnkf"/><path class="ei9pf3_7b"/><path class="we2wcpp0a"/></g>`,
		"fallback": "streamline-cyber-color:music-note-1",
	});
}

export default Component;
