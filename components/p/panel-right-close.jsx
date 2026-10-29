import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tsiaq0bxy.css';
import '../../css/q/q95n7yb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tsiaq0bxy"/><path class="q95n7yb5s"/></g>`,
		"fallback": "withicons-bauhaus:panel-right-close",
	});
}

export default Component;
