import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-1nzrbmu.css';
import '../../css/m/m3oo2hbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-1nzrbmu"/><path class="m3oo2hbdc"/></g>`,
		"fallback": "tdesign:usergroup-add",
	});
}

export default Component;
