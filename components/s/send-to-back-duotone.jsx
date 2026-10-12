import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsh4t_buo.css';
import '../../css/u/ug5d9ob-u.css';
import '../../css/h/hok4tgbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wsh4t_buo"/><path class="ug5d9ob-u"/><path class="hok4tgbyg"/></g>`,
		"fallback": "lucide-extended:send-to-back-duotone",
	});
}

export default Component;
