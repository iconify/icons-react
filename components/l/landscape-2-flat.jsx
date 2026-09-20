import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fefq9gogj.css';
import '../../css/j/jdcfrlbmv.css';
import '../../css/f/fd_yk0d-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fefq9gogj"/><path clip-rule="evenodd" class="jdcfrlbmv"/><path class="fd_yk0d-h"/></g>`,
		"fallback": "streamline-sharp-color:landscape-2-flat",
	});
}

export default Component;
