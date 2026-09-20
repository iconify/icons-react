import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucf8wnbem.css';
import '../../css/y/y479ucc5d.css';
import '../../css/a/ayqtcwb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucf8wnbem"/><path clip-rule="evenodd" class="y479ucc5d"/><path class="ayqtcwb2n"/></g>`,
		"fallback": "reicon:upload-track-duotone",
	});
}

export default Component;
