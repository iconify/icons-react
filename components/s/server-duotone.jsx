import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu-v58ols.css';
import '../../css/f/f71osil0z.css';
import '../../css/s/s4xybibjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iu-v58ols"/><path class="f71osil0z"/><path class="s4xybibjt"/></g>`,
		"fallback": "lucide-extended:server-duotone",
	});
}

export default Component;
