import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/farraib9e.css';
import '../../css/e/euk3o0bic.css';
import '../../css/c/cyafimbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="farraib9e"/><path class="euk3o0bic"/><path class="cyafimbbv"/></g>`,
		"fallback": "andrsrxn:skull",
	});
}

export default Component;
