import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktuzzdhyu.css';
import '../../css/w/wb6k-wbqf.css';
import '../../css/y/y0977abbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktuzzdhyu"/><path class="wb6k-wbqf"/><path class="y0977abbd"/></g>`,
		"fallback": "lucide-extended:package-2-duotone",
	});
}

export default Component;
