import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ls565ikvq.css';
import '../../css/z/zspdhebde.css';
import '../../css/x/xts1iybur.css';
import '../../css/r/ru6vui9dw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ls565ikvq"/><path class="zspdhebde"/><path class="xts1iybur"/><path class="ru6vui9dw"/></g>`,
		"fallback": "streamline-color:pathfinder-exclude",
	});
}

export default Component;
