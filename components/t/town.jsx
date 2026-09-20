import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m23vo5mck.css';
import '../../css/s/s70b2cb2s.css';
import '../../css/r/rsy4chbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m23vo5mck"/><path class="s70b2cb2s"/><path class="rsy4chbta"/></g>`,
		"fallback": "tdesign:town",
	});
}

export default Component;
