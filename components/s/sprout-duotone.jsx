import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f361_3bvh.css';
import '../../css/d/dsdw_xbyj.css';
import '../../css/i/iclwnvkbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f361_3bvh"/><path class="dsdw_xbyj"/><path class="iclwnvkbj"/></g>`,
		"fallback": "lucide-extended:sprout-duotone",
	});
}

export default Component;
