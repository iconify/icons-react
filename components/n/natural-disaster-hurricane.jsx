import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adsr_cb6l.css';
import '../../css/i/i_ycnqb9b.css';
import '../../css/r/rcjsihboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="adsr_cb6l"/><path class="i_ycnqb9b"/><path class="rcjsihboo"/></g>`,
		"fallback": "streamline-ultimate-color:natural-disaster-hurricane",
	});
}

export default Component;
