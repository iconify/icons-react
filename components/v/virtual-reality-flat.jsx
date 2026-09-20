import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5lp0gb0r.css';
import '../../css/j/jfxg37bmd.css';
import '../../css/q/qjqsfebdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l5lp0gb0r"/><path class="jfxg37bmd"/><path class="qjqsfebdj"/></g>`,
		"fallback": "streamline-sharp-color:virtual-reality-flat",
	});
}

export default Component;
