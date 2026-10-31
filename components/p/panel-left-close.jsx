import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d0fwm-byu.css';
import '../../css/m/ml2lq6y_v.css';
import '../../css/a/ao21d5blb.css';
import '../../css/y/yofvkebxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="d0fwm-byu"/><path class="ml2lq6y_v wm-shine"/><path class="ao21d5blb wm-k"/><path class="wm-a yofvkebxz"/></g>`,
		"fallback": "withicons-kawaii:panel-left-close",
	});
}

export default Component;
