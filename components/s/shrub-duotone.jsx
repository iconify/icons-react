import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyotybbww.css';
import '../../css/x/xk1psybxr.css';
import '../../css/z/zvnbchb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wyotybbww"/><path class="xk1psybxr"/><path class="zvnbchb3h"/></g>`,
		"fallback": "lucide-extended:shrub-duotone",
	});
}

export default Component;
