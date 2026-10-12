import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n748a4b6o.css';
import '../../css/g/g7-z5_thi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n748a4b6o"/><path class="g7-z5_thi"/></g>`,
		"fallback": "lucide-extended:user-cog-duotone",
	});
}

export default Component;
