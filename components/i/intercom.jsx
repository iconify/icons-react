import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/on0dm2bco.css';
import '../../css/x/xm85kvbbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="on0dm2bco"/><path class="xm85kvbbe"/></g>`,
		"fallback": "icon-park-outline:intercom",
	});
}

export default Component;
