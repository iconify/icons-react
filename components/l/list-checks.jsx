import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gdr7j_oar.css';
import '../../css/l/lwhdk_94a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gdr7j_oar"/><path class="lwhdk_94a"/></g>`,
		"fallback": "withicons-retro:list-checks",
	});
}

export default Component;
