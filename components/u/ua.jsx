import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aybn5c93x.css';
import '../../css/n/n9vlmnvbi.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aybn5c93x"/><path class="n9vlmnvbi"/></g>`,
		"fallback": "cif:ua",
	});
}

export default Component;
