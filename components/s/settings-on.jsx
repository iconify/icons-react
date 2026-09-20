import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agvzadc3h.css';
import '../../css/p/ph6c3nbzo.css';
import '../../css/d/dgk0jub0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="agvzadc3h"/><path class="ph6c3nbzo"/><path class="dgk0jub0h"/></g>`,
		"fallback": "streamline-ultimate-color:settings-on",
	});
}

export default Component;
