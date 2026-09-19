import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etowl0b4w.css';
import '../../css/z/z0qa8bb7g.css';
import '../../css/r/r8biox0bn.css';
import '../../css/r/rej7w7gqi.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="etowl0b4w"/><path class="z0qa8bb7g"/><path class="r8biox0bn"/><path class="rej7w7gqi"/></g>`,
		"fallback": "cif:mm",
	});
}

export default Component;
