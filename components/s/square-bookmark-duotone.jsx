import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh68e-fxv.css';
import '../../css/b/bgakwib_u.css';
import '../../css/s/s1a2eew1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oh68e-fxv"/><path class="bgakwib_u"/><path class="s1a2eew1e"/></g>`,
		"fallback": "lucide-extended:square-bookmark-duotone",
	});
}

export default Component;
