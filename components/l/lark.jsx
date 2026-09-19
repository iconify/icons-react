import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xxh3e3l9p.css';
import '../../css/n/nrhwxkbyd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="xxh3e3l9p"/><path class="nrhwxkbyd"/></g>`,
		"fallback": "icon-park:lark",
	});
}

export default Component;
