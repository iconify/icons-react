import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uvh5rrbvb.css';
import '../../css/s/scdv35xyn.css';
import '../../css/s/sjya5bbyx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="uvh5rrbvb"/><path class="scdv35xyn"/><path class="sjya5bbyx"/></g>`,
		"fallback": "icon-park-solid:mouse-one",
	});
}

export default Component;
