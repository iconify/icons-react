import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjl2y6b8n.css';
import '../../css/l/l77-jybny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjl2y6b8n"/><path clip-rule="evenodd" class="l77-jybny"/></g>`,
		"fallback": "streamline-color:vertical-slider-square-flat",
	});
}

export default Component;
