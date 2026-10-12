import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4k59pnxv.css';
import '../../css/a/aveko8b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h4k59pnxv"/><path class="aveko8b-j"/></g>`,
		"fallback": "lucide-extended:sword-duotone",
	});
}

export default Component;
