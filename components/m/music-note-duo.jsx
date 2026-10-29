import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d0va1t33w.css';
import '../../css/g/gle5llb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d0va1t33w"/><path class="gle5llb7u"/></g>`,
		"fallback": "withicons:music-note-duo",
	});
}

export default Component;
