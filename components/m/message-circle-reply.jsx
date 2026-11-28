import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/k/kgf3dfbjm.css';
import '../../css/o/osusqhh4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gtipehbld"/><path class="kgf3dfbjm"/><path class="osusqhh4a"/></g>`,
		"fallback": "iconaut:message-circle-reply",
	});
}

export default Component;
