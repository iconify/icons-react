import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q95_q6bmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q95_q6bmi"/>`,
		"fallback": "file-icons:max",
	});
}

export default Component;
