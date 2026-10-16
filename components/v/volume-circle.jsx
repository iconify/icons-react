import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znpfaumql.css';
import '../../css/a/ade9yibvi.css';
import '../../css/l/leyr59bsa.css';
import '../../css/h/h27vhbcct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="znpfaumql"/><path class="ade9yibvi"/><path class="leyr59bsa"/><circle transform="rotate(90 12 12)" class="h27vhbcct"/></g>`,
		"fallback": "andrsrxn:volume-circle",
	});
}

export default Component;
