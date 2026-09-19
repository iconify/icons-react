import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/co1jphb4p.css';
import '../../css/n/nd2nnhb9z.css';
import '../../css/d/d-bufxb7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="co1jphb4p"/><path class="nd2nnhb9z"/><path class="d-bufxb7a"/></g>`,
		"fallback": "icon-park-outline:neural",
	});
}

export default Component;
