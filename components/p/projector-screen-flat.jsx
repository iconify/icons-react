import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-jufudct.css';
import '../../css/d/d7hqnxc5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-jufudct"/><path clip-rule="evenodd" class="d7hqnxc5p"/></g>`,
		"fallback": "streamline-sharp-color:projector-screen-flat",
	});
}

export default Component;
