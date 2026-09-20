import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xlsu0kbaj.css';
import '../../css/e/eb_d8vbqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="xlsu0kbaj"/><path class="eb_d8vbqo"/></g>`,
		"fallback": "streamline-plump:play-list-1",
	});
}

export default Component;
