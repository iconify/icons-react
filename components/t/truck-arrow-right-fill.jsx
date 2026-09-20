import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qd7algebq.css';
import '../../css/b/bs382uo9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qd7algebq"/><path class="bs382uo9g"/></g>`,
		"fallback": "keyline-icons:truck-arrow-right-fill",
	});
}

export default Component;
