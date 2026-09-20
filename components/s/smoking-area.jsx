import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gntpgix9r.css';
import '../../css/f/f_aj-nbou.css';
import '../../css/o/opb6swbnp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gntpgix9r"/><path class="f_aj-nbou"/><path class="opb6swbnp"/></g>`,
		"fallback": "streamline-color:smoking-area",
	});
}

export default Component;
