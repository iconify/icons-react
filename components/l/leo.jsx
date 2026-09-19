import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/s19j41blo.css';
import '../../css/a/agrs6obul.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="s19j41blo"/><path class="agrs6obul"/></g>`,
		"fallback": "icon-park-outline:leo",
	});
}

export default Component;
