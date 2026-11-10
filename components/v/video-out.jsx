import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7kwzhbyq.css';
import '../../css/v/v21v4mf_p.css';
import '../../css/m/mjmxeyvhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7kwzhbyq"/><path class="v21v4mf_p"/><path class="mjmxeyvhl"/></g>`,
		"fallback": "andrsrxn:video-out",
	});
}

export default Component;
