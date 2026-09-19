import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p61fjvbup.css';
import '../../css/k/k4kf9d06i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="p61fjvbup"/><path class="k4kf9d06i"/></g>`,
		"fallback": "icon-park-outline:iphone",
	});
}

export default Component;
