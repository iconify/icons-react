import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g7kvze86q.css';
import '../../css/t/tyl_u5bcc.css';
import '../../css/i/i7qv3i8gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="g7kvze86q"/><path class="tyl_u5bcc wm-a"/><path class="i7qv3i8gc"/></g>`,
		"fallback": "withicons:popcorn",
	});
}

export default Component;
