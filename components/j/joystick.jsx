import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/umfbp7kgz.css';
import '../../css/g/g7z2j-78e.css';
import '../../css/a/an-j2gbcb.css';
import '../../css/c/c1t--rtgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="umfbp7kgz"/><path class="g7z2j-78e"/><path class="an-j2gbcb"/><path class="c1t--rtgz"/></g>`,
		"fallback": "icon-park-solid:joystick",
	});
}

export default Component;
