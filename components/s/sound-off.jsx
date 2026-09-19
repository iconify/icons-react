import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/l/l61xzgb2v.css';
import '../../css/i/i2qi74b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="l61xzgb2v"/><path class="i2qi74b6w"/></g>`,
		"fallback": "akar-icons:sound-off",
	});
}

export default Component;
