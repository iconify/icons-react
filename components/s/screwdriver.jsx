import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l_slstbru.css';
import '../../css/q/qdcks7bbe.css';
import '../../css/f/f5f0dybwh.css';
import '../../css/d/d-xx34bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l_slstbru wm-k"/><path class="qdcks7bbe wm-a"/><path class="f5f0dybwh"/><path class="d-xx34bda"/></g>`,
		"fallback": "withicons-bauhaus:screwdriver",
	});
}

export default Component;
