import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl1yh_9oy.css';
import '../../css/a/awhev5b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gl1yh_9oy"/><path class="awhev5b1d"/></g>`,
		"fallback": "lucide-extended:rows-3-duotone",
	});
}

export default Component;
