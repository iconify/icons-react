import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/y4x-jip2w.css';
import '../../css/p/px4b74b8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="y4x-jip2w"/><path class="px4b74b8x"/></g>`,
		"fallback": "streamline-plump:sofa",
	});
}

export default Component;
