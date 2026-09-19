import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vbx_e1bgh.css';
import '../../css/t/tskwdnsgg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="vbx_e1bgh"/><path class="tskwdnsgg"/></g>`,
		"fallback": "icon-park-outline:plug-one",
	});
}

export default Component;
