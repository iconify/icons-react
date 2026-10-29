import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k9bwl5bod.css';
import '../../css/z/zlabp6b3m.css';
import '../../css/k/ke31klbxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k9bwl5bod"/><path class="zlabp6b3m"/><path class="ke31klbxe"/></g>`,
		"fallback": "withicons-bauhaus:search-x",
	});
}

export default Component;
