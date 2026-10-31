import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tqbe-yqyp.css';
import '../../css/u/upfadobgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tqbe-yqyp"/><path class="upfadobgk"/></g>`,
		"fallback": "coolicons:mobile-button-duotone-round",
	});
}

export default Component;
