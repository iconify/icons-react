import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0pzrtb-f.css';
import '../../css/q/qhsk7nn5g.css';
import '../../css/q/qfznpkbpj.css';
import '../../css/c/c4dscyzks.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0pzrtb-f"/><path class="qhsk7nn5g"/><path class="qfznpkbpj"/><path class="c4dscyzks"/></g>`,
		"fallback": "cif:sr",
	});
}

export default Component;
