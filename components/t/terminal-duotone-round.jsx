import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5xlv_bkz.css';
import '../../css/l/lr3xiudrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5xlv_bkz"/><path class="lr3xiudrc"/></g>`,
		"fallback": "coolicons:terminal-duotone-round",
	});
}

export default Component;
