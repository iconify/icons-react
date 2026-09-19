import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/arbmb7b9s.css';
import '../../css/t/tx6culb0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="arbmb7b9s"/><path class="tx6culb0f"/></g>`,
		"fallback": "icon-park:screwdriver",
	});
}

export default Component;
