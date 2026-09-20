import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fjxam0bln.css';
import '../../css/e/ei0y91b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fjxam0bln"/><path class="ei0y91b4q"/></g>`,
		"fallback": "streamline-sharp:spa",
	});
}

export default Component;
