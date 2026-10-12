import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d60vacbah.css';
import '../../css/d/dvxborbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d60vacbah"/><path class="dvxborbhv"/></g>`,
		"fallback": "lucide-extended:user-duotone",
	});
}

export default Component;
