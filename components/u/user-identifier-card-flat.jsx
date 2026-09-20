import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg077n2gk.css';
import '../../css/x/x-27xdb1j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg077n2gk"/><path clip-rule="evenodd" class="x-27xdb1j"/></g>`,
		"fallback": "streamline-color:user-identifier-card-flat",
	});
}

export default Component;
