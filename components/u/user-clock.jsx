import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dmvc1yldm.css';
import '../../css/f/fx38fwtmt.css';
import '../../css/g/gdom9jbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dmvc1yldm wm-k"/><path class="fx38fwtmt wm-s"/><path class="gdom9jbqk wm-s"/></g>`,
		"fallback": "withicons-bauhaus:user-clock",
	});
}

export default Component;
