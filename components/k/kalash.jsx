import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m8n2a-b2o.css';
import '../../css/l/l01suz5-u.css';
import '../../css/i/iyjpwxb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m8n2a-b2o wm-k"/><path class="l01suz5-u wm-a"/><path class="iyjpwxb0l"/></g>`,
		"fallback": "withicons-bauhaus:kalash",
	});
}

export default Component;
