import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z_bvjlbkh.css';
import '../../css/j/jbzsp7bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k z_bvjlbkh"/><path class="jbzsp7bin wm-a"/></g>`,
		"fallback": "withicons-bauhaus:users-round",
	});
}

export default Component;
