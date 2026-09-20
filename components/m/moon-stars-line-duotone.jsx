import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/d4mf_6n7s.css';
import '../../css/z/zjkwwcx1u.css';
import '../../css/q/q-1dbpefw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="d4mf_6n7s"/><path class="zjkwwcx1u"/><path class="q-1dbpefw"/></g>`,
		"fallback": "solar:moon-stars-line-duotone",
	});
}

export default Component;
