import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/e4sdhbc-x.css';
import '../../css/h/h-lp_vb0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="e4sdhbc-x"/><path class="h-lp_vb0a"/></g>`,
		"fallback": "icon-park-outline:theater",
	});
}

export default Component;
