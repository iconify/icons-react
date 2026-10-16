import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_me49zno.css';
import '../../css/l/lvvccctbs.css';
import '../../css/v/vb9h1mbmg.css';
import '../../css/y/yx0oz3bht.css';

const viewBox = {"width":38.844,"height":37.926,"left":8.424,"top":15.686};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_me49zno"/><path class="lvvccctbs"/><path class="vb9h1mbmg"/><path class="yx0oz3bht"/></g>`,
		"fallback": "thesvg-color:web-check-dark",
	});
}

export default Component;
