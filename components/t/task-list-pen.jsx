import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv7zve2go.css';
import '../../css/w/wobq_bpfs.css';
import '../../css/z/zfr3rtvfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mv7zve2go"/><path class="wobq_bpfs"/><path class="zfr3rtvfx"/></g>`,
		"fallback": "streamline-freehand-color:task-list-pen",
	});
}

export default Component;
