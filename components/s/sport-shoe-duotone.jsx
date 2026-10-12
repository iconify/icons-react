import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqi5w84kf.css';
import '../../css/s/s2u0dzg7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mqi5w84kf"/><path class="s2u0dzg7c"/></g>`,
		"fallback": "lucide-extended:sport-shoe-duotone",
	});
}

export default Component;
