import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lyfd7hmmk.css';
import '../../css/m/mbjlcufky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lyfd7hmmk"/><path class="mbjlcufky"/></g>`,
		"fallback": "streamline-sharp-color:sun-flat",
	});
}

export default Component;
