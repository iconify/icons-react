import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y67ukkb7b.css';
import '../../css/h/hsp5ry7sn.css';
import '../../css/h/hguip8b7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y67ukkb7b"/><path clip-rule="evenodd" class="hsp5ry7sn"/><path clip-rule="evenodd" class="hguip8b7c"/></g>`,
		"fallback": "streamline-plump-color:user-face-male-flat",
	});
}

export default Component;
