import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6b1sjbce.css';
import '../../css/j/jai1xcbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6b1sjbce"/><path clip-rule="evenodd" class="jai1xcbmk"/></g>`,
		"fallback": "streamline-sharp-color:padlock-square-2-flat",
	});
}

export default Component;
