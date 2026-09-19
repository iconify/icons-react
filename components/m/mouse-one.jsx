import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/u/uvh5rrbvb.css';
import '../../css/f/f6-wovb1x.css';
import '../../css/q/qu-o3tbth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="uvh5rrbvb"/><path class="f6-wovb1x"/><path class="qu-o3tbth"/></g>`,
		"fallback": "icon-park:mouse-one",
	});
}

export default Component;
