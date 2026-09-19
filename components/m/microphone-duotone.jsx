import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujxvzzb0u.css';
import '../../css/y/yr9l9-99x.css';
import '../../css/z/zu8di0bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ujxvzzb0u"/><rect class="yr9l9-99x"/><path class="zu8di0bdi"/></g>`,
		"fallback": "iconamoon:microphone-duotone",
	});
}

export default Component;
