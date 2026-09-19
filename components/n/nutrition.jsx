import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/dkwmvxcqz.css';
import '../../css/q/q7kngdcwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="dkwmvxcqz"/><path class="q7kngdcwr"/></g>`,
		"fallback": "icon-park-outline:nutrition",
	});
}

export default Component;
