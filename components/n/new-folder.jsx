import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef7iwcbpf.css';
import '../../css/w/wcnzo0buk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ef7iwcbpf"/><path class="wcnzo0buk"/></g>`,
		"fallback": "streamline-color:new-folder",
	});
}

export default Component;
