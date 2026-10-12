import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xt3mddb4v.css';
import '../../css/e/e7qjm9blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xt3mddb4v"/><path class="e7qjm9blj"/></g>`,
		"fallback": "lucide-extended:square-stack-duotone",
	});
}

export default Component;
