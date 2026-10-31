import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g54u8abcq.css';
import '../../css/j/jc2cfgb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g54u8abcq"/><path class="jc2cfgb6b"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-left-duotone-round",
	});
}

export default Component;
