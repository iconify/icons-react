import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjd26fx0h.css';
import '../../css/m/mg41iux5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vjd26fx0h"/><path class="mg41iux5t"/></g>`,
		"fallback": "lucide-extended:mouse-pointer-click-duotone",
	});
}

export default Component;
