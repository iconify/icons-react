import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbuo8x34l.css';
import '../../css/k/kfkatubxd.css';
import '../../css/h/h56p5miuc.css';
import '../../css/l/l5p2-czkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbuo8x34l"/><path class="kfkatubxd"/><path class="h56p5miuc"/><path class="l5p2-czkg"/></g>`,
		"fallback": "lucide-extended:vote-duotone",
	});
}

export default Component;
