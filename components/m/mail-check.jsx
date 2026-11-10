import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htdihjbww.css';
import '../../css/d/dnx147b0h.css';
import '../../css/l/lxhwf4tqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="htdihjbww"/><path class="dnx147b0h"/><path class="lxhwf4tqf"/></g>`,
		"fallback": "andrsrxn:mail-check",
	});
}

export default Component;
