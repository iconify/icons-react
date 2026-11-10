import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c11nhts-x.css';
import '../../css/z/zdyprpbaw.css';
import '../../css/a/abdk55fmk.css';
import '../../css/m/mr6werbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c11nhts-x"/><path class="zdyprpbaw"/><path class="abdk55fmk"/><path class="mr6werbrd"/></g>`,
		"fallback": "andrsrxn:sofa",
	});
}

export default Component;
