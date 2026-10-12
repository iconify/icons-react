import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyo09ve5h.css';
import '../../css/j/jyuddqs9y.css';
import '../../css/i/iat-fdaxx.css';
import '../../css/k/k5uczl3ks.css';
import '../../css/b/bet4yfb4x.css';
import '../../css/y/y8oulbboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dyo09ve5h"/><path class="jyuddqs9y"/><path class="iat-fdaxx"/><path class="k5uczl3ks"/><path class="bet4yfb4x"/><path class="y8oulbboy"/></g>`,
		"fallback": "lucide-extended:orbit-duotone",
	});
}

export default Component;
