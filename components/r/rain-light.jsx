import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x01w35buh.css';
import '../../css/m/makx93w7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x01w35buh"/><path class="makx93w7b"/></g>`,
		"fallback": "lets-icons:rain-light",
	});
}

export default Component;
