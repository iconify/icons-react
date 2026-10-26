import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/b6f73j5sr.css';
import '../../css/x/xe4j2ovyi.css';
import '../../css/x/xxvel3-en.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="b6f73j5sr"/><path class="xe4j2ovyi"/><path class="xxvel3-en"/></g>`,
		"fallback": "doodle-icons:table",
	});
}

export default Component;
