import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1uca-ikg.css';
import '../../css/l/laogv4bch.css';
import '../../css/k/ki04gnhfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1uca-ikg"/><path class="laogv4bch"/><path class="ki04gnhfg"/></g>`,
		"fallback": "lucide-extended:watch-duotone",
	});
}

export default Component;
