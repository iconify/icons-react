import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mjczpwbmh.css';
import '../../css/l/lenqly58b.css';
import '../../css/h/h79q5vbot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mjczpwbmh"/><circle class="lenqly58b"/><path class="h79q5vbot"/></g>`,
		"fallback": "icon-park-solid:outbound",
	});
}

export default Component;
