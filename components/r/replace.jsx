import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kr0s-5gre.css';
import '../../css/u/uh5ke-bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kr0s-5gre"/><path class="uh5ke-bje"/></g>`,
		"fallback": "withicons-bauhaus:replace",
	});
}

export default Component;
