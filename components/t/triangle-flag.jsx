import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_80qac3l.css';
import '../../css/r/rl47drbbh.css';
import '../../css/t/tcjkky78a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_80qac3l"/><path class="rl47drbbh"/><path class="tcjkky78a"/></g>`,
		"fallback": "streamline-flex-color:triangle-flag",
	});
}

export default Component;
