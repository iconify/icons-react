import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/th4v54d0o.css';
import '../../css/d/dmc7r1bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="th4v54d0o"/><path class="dmc7r1bbe"/></g>`,
		"fallback": "tdesign:mind-map",
	});
}

export default Component;
