import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/o/oy62dzb_h.css';
import '../../css/m/moyuhzd7x.css';
import '../../css/q/q9u1plaal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="oy62dzb_h"/><path class="moyuhzd7x"/><path class="q9u1plaal"/></g>`,
		"fallback": "tdesign:view-image",
	});
}

export default Component;
