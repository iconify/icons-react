import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rmihnpbhj.css';
import '../../css/v/vb7m3437e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="rmihnpbhj"/><path class="vb7m3437e"/></g>`,
		"fallback": "lets-icons:scan-light",
	});
}

export default Component;
