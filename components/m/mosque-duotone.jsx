import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvjmn1d_n.css';
import '../../css/b/bif3_hg0k.css';
import '../../css/w/wh4w-7b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pvjmn1d_n"/><path class="bif3_hg0k"/><path class="wh4w-7b0k"/></g>`,
		"fallback": "lucide-extended:mosque-duotone",
	});
}

export default Component;
