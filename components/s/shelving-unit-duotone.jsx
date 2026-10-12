import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2fahlnuq.css';
import '../../css/c/coa9yuboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2fahlnuq"/><path class="coa9yuboj"/></g>`,
		"fallback": "lucide-extended:shelving-unit-duotone",
	});
}

export default Component;
