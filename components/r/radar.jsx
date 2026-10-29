import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mevgakb8a.css';
import '../../css/f/ftmmgybqo.css';
import '../../css/s/szy4bhbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mevgakb8a"/><path class="ftmmgybqo"/><path class="szy4bhbqb"/></g>`,
		"fallback": "withicons-bauhaus:radar",
	});
}

export default Component;
