import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nvuc8chms.css';
import '../../css/k/k-n-l4bih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="nvuc8chms"/><path class="k-n-l4bih"/></g>`,
		"fallback": "icon-park-outline:medical-box",
	});
}

export default Component;
