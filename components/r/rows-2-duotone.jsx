import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qt8c3f6pa.css';
import '../../css/b/byuk0ty1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qt8c3f6pa"/><path class="byuk0ty1p"/></g>`,
		"fallback": "lucide-extended:rows-2-duotone",
	});
}

export default Component;
