import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqeoggbkc.css';
import '../../css/v/vw-qm_bri.css';
import '../../css/q/q23_x9ebp.css';

const viewBox = {"width":205.935,"height":264.583};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqeoggbkc"/><path class="vw-qm_bri"/><path class="q23_x9ebp"/>`,
		"fallback": "thesvg-color:mitsubishi-motors",
	});
}

export default Component;
