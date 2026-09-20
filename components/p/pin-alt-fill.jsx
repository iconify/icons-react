import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j36569sxa.css';
import '../../css/j/jk3j5r4sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j36569sxa"/><path class="jk3j5r4sn"/></g>`,
		"fallback": "lets-icons:pin-alt-fill",
	});
}

export default Component;
