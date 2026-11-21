import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o5l2aiban.css';
import '../../css/a/aasift6kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o5l2aiban"/><path class="aasift6kd"/></g>`,
		"fallback": "lucide-extended:line-dot-bottom-vertical-duotone",
	});
}

export default Component;
