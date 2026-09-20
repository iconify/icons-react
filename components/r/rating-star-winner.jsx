import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evuw--j0u.css';
import '../../css/a/aqf9z3bkm.css';
import '../../css/t/tr0h4ne-d.css';
import '../../css/f/fjit4obrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="evuw--j0u"/><path class="aqf9z3bkm"/><path class="tr0h4ne-d"/><path class="fjit4obrf"/></g>`,
		"fallback": "streamline-ultimate-color:rating-star-winner",
	});
}

export default Component;
