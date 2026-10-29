import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dmvc1yldm.css';
import '../../css/n/nb8oh8imn.css';
import '../../css/a/at7owu2sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dmvc1yldm wm-k"/><path class="nb8oh8imn wm-s"/><path class="at7owu2sk"/></g>`,
		"fallback": "withicons-bauhaus:user-lock",
	});
}

export default Component;
