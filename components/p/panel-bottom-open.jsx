import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dml4udbgv.css';
import '../../css/f/fiijeih2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dml4udbgv"/><path class="fiijeih2h"/></g>`,
		"fallback": "proicons:panel-bottom-open",
	});
}

export default Component;
