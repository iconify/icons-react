import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9z-gw1eh.css';
import '../../css/t/t2kj8u-pi.css';
import '../../css/b/b2hl1gbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9z-gw1eh"/><path class="t2kj8u-pi"/><path class="b2hl1gbca"/></g>`,
		"fallback": "lucide-extended:mail-clock-duotone",
	});
}

export default Component;
