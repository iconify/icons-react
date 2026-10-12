import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mb3gk9bpt.css';
import '../../css/k/km9xy360q.css';
import '../../css/g/gmcl-ec6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mb3gk9bpt"/><path class="km9xy360q"/><path class="gmcl-ec6c"/></g>`,
		"fallback": "lucide-extended:sun-dim-duotone",
	});
}

export default Component;
