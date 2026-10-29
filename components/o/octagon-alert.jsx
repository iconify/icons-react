import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qaonx4bbp.css';
import '../../css/d/dagm87w-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qaonx4bbp"/><path class="dagm87w-g"/></g>`,
		"fallback": "withicons-bauhaus:octagon-alert",
	});
}

export default Component;
