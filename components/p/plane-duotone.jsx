import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw821kzpa.css';
import '../../css/u/uegryf82u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw821kzpa"/><path class="uegryf82u"/></g>`,
		"fallback": "lucide-extended:plane-duotone",
	});
}

export default Component;
