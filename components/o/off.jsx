import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eg4du8ctn.css';
import '../../css/b/b3h2z6bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="eg4du8ctn"/><rect class="b3h2z6bcm"/></g>`,
		"fallback": "lets-icons:off",
	});
}

export default Component;
