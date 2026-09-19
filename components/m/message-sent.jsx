import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/u5o9i0gce.css';
import '../../css/a/ax-9rgjso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="u5o9i0gce"/><path class="ax-9rgjso"/></g>`,
		"fallback": "icon-park:message-sent",
	});
}

export default Component;
