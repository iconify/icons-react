import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nzjzxhpzc.css';
import '../../css/b/b4e1vu05k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nzjzxhpzc wm-k"/><path class="b4e1vu05k wm-a"/></g>`,
		"fallback": "withicons-bauhaus:rangoli-pattern",
	});
}

export default Component;
