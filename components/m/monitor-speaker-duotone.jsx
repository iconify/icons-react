import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujnoifb0t.css';
import '../../css/v/vkvjbvbux.css';
import '../../css/c/c_d4n7blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujnoifb0t"/><path class="vkvjbvbux"/><path class="c_d4n7blc"/></g>`,
		"fallback": "lucide-extended:monitor-speaker-duotone",
	});
}

export default Component;
