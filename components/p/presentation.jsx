import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qjftpab-o.css';
import '../../css/n/nbzknmbro.css';
import '../../css/h/h9b8qibyt.css';
import '../../css/v/vu75pobdj.css';
import '../../css/e/e9z8z2b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qjftpab-o wm-shadow"/><path class="nbzknmbro"/><path class="h9b8qibyt"/><path class="vu75pobdj"/><path class="e9z8z2b3z"/></g>`,
		"fallback": "withicons-retro:presentation",
	});
}

export default Component;
