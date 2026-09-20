import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgy4m7b3h.css';
import '../../css/j/jr6hdmxwt.css';
import '../../css/g/gk5djfwmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mgy4m7b3h"/><path clip-rule="evenodd" class="jr6hdmxwt"/><path class="gk5djfwmt"/></g>`,
		"fallback": "lets-icons:notebook-duotone",
	});
}

export default Component;
