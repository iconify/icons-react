import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tmeis7bsq.css';
import '../../css/p/prgws_b3e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tmeis7bsq"/><path clip-rule="evenodd" class="prgws_b3e"/></g>`,
		"fallback": "streamline-flex-color:tape-cassette-record-flat",
	});
}

export default Component;
