import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ez2ujqbwz.css';
import '../../css/a/aum4vobni.css';
import '../../css/j/j7sapabcq.css';
import '../../css/x/xrodaj0ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ez2ujqbwz wm-k"/><path class="aum4vobni wm-a"/><path class="j7sapabcq"/><path class="xrodaj0ai"/></g>`,
		"fallback": "withicons-bauhaus:rose",
	});
}

export default Component;
