import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqva_v_gi.css';
import '../../css/t/t_13s1fwo.css';
import '../../css/o/o6dcjkbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqva_v_gi"/><path class="t_13s1fwo"/><path class="o6dcjkbuw"/></g>`,
		"fallback": "lucide-extended:picture-in-picture-2-duotone",
	});
}

export default Component;
