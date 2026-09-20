import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6llgabii.css';
import '../../css/q/q3ki42tjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6llgabii"/><path class="q3ki42tjl"/>`,
		"fallback": "pixel:octagon-check",
	});
}

export default Component;
