import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0zs09fb.css';
import '../../css/o/obzdjpx-v.css';
import '../../css/b/bbi4wky7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to0zs09fb"/><path class="obzdjpx-v"/><path class="bbi4wky7o"/>`,
		"fallback": "solar:moon-stars-bold-duotone",
	});
}

export default Component;
