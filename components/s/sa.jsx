import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3cobbcjd.css';
import '../../css/t/t14-8nbao.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v3cobbcjd"/><path class="t14-8nbao"/></g>`,
		"fallback": "cif:sa",
	});
}

export default Component;
