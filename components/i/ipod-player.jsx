import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_zewcbzr.css';
import '../../css/r/re72p-hbb.css';
import '../../css/q/qpck-_2xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_zewcbzr"/><path class="re72p-hbb"/><path class="qpck-_2xs"/></g>`,
		"fallback": "streamline-freehand-color:ipod-player",
	});
}

export default Component;
