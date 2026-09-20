import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yhqb79b7v.css';
import '../../css/g/g4l74r9em.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yhqb79b7v"/><path class="g4l74r9em"/></g>`,
		"fallback": "streamline-plump-color:refrigerator",
	});
}

export default Component;
