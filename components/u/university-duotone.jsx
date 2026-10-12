import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1w-ygbvz.css';
import '../../css/y/y6ka65b-l.css';
import '../../css/j/jvaqzdbnk.css';
import '../../css/i/ip-7frbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1w-ygbvz"/><path class="y6ka65b-l"/><path class="jvaqzdbnk"/><path clip-rule="evenodd" class="ip-7frbkr"/></g>`,
		"fallback": "lucide-extended:university-duotone",
	});
}

export default Component;
