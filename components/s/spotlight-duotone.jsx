import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4xm99bgk.css';
import '../../css/x/xz0npwbkb.css';
import '../../css/q/q_atanv8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4xm99bgk"/><path class="xz0npwbkb"/><path class="q_atanv8e"/></g>`,
		"fallback": "lucide-extended:spotlight-duotone",
	});
}

export default Component;
