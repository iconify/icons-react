import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vecvimbom.css';
import '../../css/f/fd5vhobon.css';
import '../../css/i/ik9h6uvfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vecvimbom"/><path class="fd5vhobon"/><path class="ik9h6uvfy"/></g>`,
		"fallback": "keyline-icons:shopping-bag-sharp-duotone",
	});
}

export default Component;
