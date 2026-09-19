import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/ca7ki2bss.css';
import '../../css/b/b6mu38bbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ca7ki2bss"/><circle class="b6mu38bbk"/></g>`,
		"fallback": "icon-park-solid:read-book",
	});
}

export default Component;
