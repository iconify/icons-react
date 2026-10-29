import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ggdd3jbyx.css';
import '../../css/d/d4-92dm9n.css';
import '../../css/k/k0gav31sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ggdd3jbyx wm-k"/><path class="d4-92dm9n"/><path class="k0gav31sg wm-s"/></g>`,
		"fallback": "withicons-bauhaus:mail-warning",
	});
}

export default Component;
