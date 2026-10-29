import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uiy-5kbbf.css';
import '../../css/u/u_fqnw4yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uiy-5kbbf wm-k"/><path class="u_fqnw4yq wm-a"/></g>`,
		"fallback": "withicons-bauhaus:pipette",
	});
}

export default Component;
