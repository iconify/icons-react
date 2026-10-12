import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4z46wbrw.css';
import '../../css/h/hbhcawbze.css';
import '../../css/s/s9rzi2bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h4z46wbrw"/><path class="hbhcawbze"/><path class="s9rzi2bzy"/></g>`,
		"fallback": "lucide-extended:volume-1-duotone",
	});
}

export default Component;
