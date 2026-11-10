import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igaxyszbl.css';
import '../../css/f/fzv03288i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="igaxyszbl"/><path class="fzv03288i"/></g>`,
		"fallback": "lucide-extended:mango-duotone",
	});
}

export default Component;
