import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd_b6hsic.css';
import '../../css/h/hyi7g9m7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yd_b6hsic"/><path class="hyi7g9m7d"/></g>`,
		"fallback": "lucide-extended:triangle-right-duotone",
	});
}

export default Component;
