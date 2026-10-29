import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cofdlhb9e.css';
import '../../css/i/iawhcvb9q.css';
import '../../css/n/nqv3_-b2b.css';
import '../../css/x/xfzl-hl3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cofdlhb9e"/><path class="iawhcvb9q"/><path class="nqv3_-b2b"/><path class="xfzl-hl3i"/></g>`,
		"fallback": "withicons-bauhaus:mehndi-hand",
	});
}

export default Component;
