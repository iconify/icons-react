import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fyomvzbia.css';
import '../../css/t/ta28-_i6j.css';
import '../../css/p/pkz-2empp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fyomvzbia"/><path class="ta28-_i6j"/><path class="pkz-2empp"/></g>`,
		"fallback": "lucide:salad",
	});
}

export default Component;
