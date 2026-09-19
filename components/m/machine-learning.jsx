import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-lm-kbpu.css';
import '../../css/k/k4cp8nxvu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-lm-kbpu"/><path class="k4cp8nxvu"/>`,
		"fallback": "carbon:machine-learning",
	});
}

export default Component;
