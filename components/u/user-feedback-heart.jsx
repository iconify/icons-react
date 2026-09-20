import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/on5etz4se.css';
import '../../css/t/tnpc8ubgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="on5etz4se"/><path class="tnpc8ubgx"/></g>`,
		"fallback": "streamline-plump:user-feedback-heart",
	});
}

export default Component;
