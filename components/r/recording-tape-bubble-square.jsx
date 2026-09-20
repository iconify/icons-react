import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imvy0pbfh.css';
import '../../css/v/vtooltb9j.css';
import '../../css/j/jjsrfidrd.css';
import '../../css/s/syq_tm52u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="imvy0pbfh"/><path class="vtooltb9j"/><path class="jjsrfidrd"/><path class="syq_tm52u"/></g>`,
		"fallback": "streamline-color:recording-tape-bubble-square",
	});
}

export default Component;
