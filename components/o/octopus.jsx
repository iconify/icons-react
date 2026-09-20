import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o825azciz.css';
import '../../css/f/f45v-3b9f.css';
import '../../css/o/od9fx8b6h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o825azciz"/><path class="f45v-3b9f"/><path class="od9fx8b6h"/></g>`,
		"fallback": "streamline-color:octopus",
	});
}

export default Component;
