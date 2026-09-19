import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r8sbv39ff.css';
import '../../css/f/f7p4sx09b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r8sbv39ff"/><path class="f7p4sx09b"/></g>`,
		"fallback": "hugeicons:security-wifi",
	});
}

export default Component;
