import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a5tok70xs.css';
import '../../css/i/i2qi74b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="a5tok70xs"/><path class="i2qi74b6w"/></g>`,
		"fallback": "akar-icons:sound-down",
	});
}

export default Component;
