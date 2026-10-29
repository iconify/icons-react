import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ilcid4bby.css';
import '../../css/j/jk1k3xbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ilcid4bby wm-k"/><path class="jk1k3xbxz wm-a"/></g>`,
		"fallback": "withicons-bauhaus:ungroup",
	});
}

export default Component;
