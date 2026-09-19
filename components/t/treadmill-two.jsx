import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/ld3j6-bqh.css';
import '../../css/t/tov0w7bar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ld3j6-bqh"/><rect class="tov0w7bar"/></g>`,
		"fallback": "icon-park-solid:treadmill-two",
	});
}

export default Component;
