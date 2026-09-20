import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x1q46ybnx.css';
import '../../css/f/f6_hb46os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x1q46ybnx"/><path class="f6_hb46os"/></g>`,
		"fallback": "keyline-icons:scissors-fill",
	});
}

export default Component;
