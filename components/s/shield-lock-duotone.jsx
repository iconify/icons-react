import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/suve9jbyr.css';
import '../../css/v/vu6xhtzyn.css';
import '../../css/s/sa9op7ect.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="suve9jbyr"/><path class="vu6xhtzyn"/><path class="sa9op7ect"/></g>`,
		"fallback": "lucide-extended:shield-lock-duotone",
	});
}

export default Component;
