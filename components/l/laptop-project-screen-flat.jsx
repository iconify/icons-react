import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckgc292ug.css';
import '../../css/w/w4qvkpqyc.css';
import '../../css/q/q0me2xbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ckgc292ug"/><path class="w4qvkpqyc"/><path clip-rule="evenodd" class="q0me2xbzg"/></g>`,
		"fallback": "streamline-sharp-color:laptop-project-screen-flat",
	});
}

export default Component;
