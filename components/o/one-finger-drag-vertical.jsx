import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-myhwb7u.css';
import '../../css/v/v-bpooz7h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-myhwb7u"/><path class="v-bpooz7h"/></g>`,
		"fallback": "streamline-color:one-finger-drag-vertical",
	});
}

export default Component;
