import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0l0t4bnd.css';
import '../../css/o/oi_p53big.css';
import '../../css/v/v7epvdjfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0l0t4bnd"/><path class="oi_p53big"/><path class="v7epvdjfq"/></g>`,
		"fallback": "lucide-extended:test-tube-diagonal-duotone",
	});
}

export default Component;
