import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/u/uv8rmov5t.css';
import '../../css/g/g-p7izu9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="uv8rmov5t"/><path class="g-p7izu9g"/></g>`,
		"fallback": "doodle-icons:pumpkin-pie",
	});
}

export default Component;
