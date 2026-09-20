import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u0p54abal.css';
import '../../css/q/qtes1ccuu.css';
import '../../css/e/e-_y97b5b.css';
import '../../css/o/o0s61pf4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u0p54abal"/><path class="qtes1ccuu"/><path class="e-_y97b5b"/><path class="o0s61pf4c"/></g>`,
		"fallback": "streamline-freehand-color:office-file-sheet",
	});
}

export default Component;
