import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/al4914byu.css';
import '../../css/b/b-48qzbat.css';
import '../../css/o/o0j4sf91j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="al4914byu wm-k"/><path class="b-48qzbat wm-a"/><path class="o0j4sf91j"/></g>`,
		"fallback": "withicons-bauhaus:laddoo",
	});
}

export default Component;
