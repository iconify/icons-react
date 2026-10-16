import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5qj82b_z.css';
import '../../css/l/lvvccctbs.css';
import '../../css/x/xws3e-b5b.css';
import '../../css/y/yx0oz3bht.css';

const viewBox = {"width":38.844,"height":37.926,"left":8.424,"top":15.686};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5qj82b_z"/><path class="lvvccctbs"/><path class="xws3e-b5b"/><path class="yx0oz3bht"/></g>`,
		"fallback": "thesvg-color:web-check-light",
	});
}

export default Component;
