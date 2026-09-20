import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vz7v_lnrm.css';
import '../../css/u/u-qawnbuv.css';
import '../../css/c/cl4vunbtk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vz7v_lnrm"/><path class="u-qawnbuv"/><path class="cl4vunbtk"/></g>`,
		"fallback": "streamline-flex-color:video-close-captioning",
	});
}

export default Component;
