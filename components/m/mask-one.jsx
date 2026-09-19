import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zu8kvebxi.css';
import '../../css/z/zdzfvnvov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="zu8kvebxi"/><path class="zdzfvnvov"/></g>`,
		"fallback": "icon-park-solid:mask-one",
	});
}

export default Component;
