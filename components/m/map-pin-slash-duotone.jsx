import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg5g8obyv.css';
import '../../css/s/sgwj7m_pu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sg5g8obyv"/><path class="sgwj7m_pu"/></g>`,
		"fallback": "pullo:map-pin-slash-duotone",
	});
}

export default Component;
