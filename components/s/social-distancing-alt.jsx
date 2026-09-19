import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xz53dfl3a.css';
import '../../css/a/a3ec7hb9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xz53dfl3a"/><path class="a3ec7hb9f"/></g>`,
		"fallback": "healthicons:social-distancing-alt",
	});
}

export default Component;
