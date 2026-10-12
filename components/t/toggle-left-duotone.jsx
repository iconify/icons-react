import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dswk5-x-u.css';
import '../../css/m/mrknojtdi.css';
import '../../css/v/vzuisubco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dswk5-x-u"/><path class="mrknojtdi"/><path clip-rule="evenodd" class="vzuisubco"/></g>`,
		"fallback": "lucide-extended:toggle-left-duotone",
	});
}

export default Component;
