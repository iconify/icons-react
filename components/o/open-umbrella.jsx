import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2-87xm7h.css';
import '../../css/w/wn8qupbsc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2-87xm7h"/><path class="wn8qupbsc"/></g>`,
		"fallback": "streamline-color:open-umbrella",
	});
}

export default Component;
