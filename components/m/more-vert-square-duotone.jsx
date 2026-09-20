import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkmy5cc1h.css';
import '../../css/b/ba9_ej6ts.css';
import '../../css/t/t-1ug4bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bkmy5cc1h"/><path class="ba9_ej6ts"/><path class="t-1ug4bof"/></g>`,
		"fallback": "si:more-vert-square-duotone",
	});
}

export default Component;
