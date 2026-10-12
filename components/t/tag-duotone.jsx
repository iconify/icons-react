import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5j7aexcp.css';
import '../../css/l/luxc5ghbs.css';
import '../../css/r/rojk_bdub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5j7aexcp"/><path class="luxc5ghbs"/><path class="rojk_bdub"/></g>`,
		"fallback": "lucide-extended:tag-duotone",
	});
}

export default Component;
