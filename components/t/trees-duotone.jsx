import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-oq9ybmx.css';
import '../../css/w/wk8pa9buv.css';
import '../../css/r/r5euffbjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w-oq9ybmx"/><path class="wk8pa9buv"/><path class="r5euffbjm"/></g>`,
		"fallback": "lucide-extended:trees-duotone",
	});
}

export default Component;
