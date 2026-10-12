import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pupmn7byp.css';
import '../../css/i/ibi79_0ja.css';
import '../../css/z/zy6u5qbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(-90 12 18.05)" class="pupmn7byp"/><circle transform="rotate(-90 12 18.05)" class="ibi79_0ja"/><path class="zy6u5qbug"/></g>`,
		"fallback": "andrsrxn:text-font-variable",
	});
}

export default Component;
